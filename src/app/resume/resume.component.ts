import {Component, OnDestroy, OnInit} from '@angular/core';
import {ResumeService} from "@resume/services/resume.service";
import {BehaviorSubject, debounceTime, distinctUntilChanged, finalize, Subject, takeUntil} from "rxjs";
import {Technology} from "@models/technology.model";
import {Experience} from "@models/experience.model";
import Timeout = NodeJS.Timeout;

@Component({
  selector: 'atp-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit, OnDestroy {
  public readonly categories$ = new Subject<string[]>();
  public readonly experience$ = new Subject<Experience[]>();
  public readonly hideSpinner$ = new BehaviorSubject<boolean>(true);

  private groupedTechnologies!: {category: string, technologies: string[]}[];
  private allExperience!: Experience[];
  private onKeyUp$ = new Subject<string>();
  private destroy$ = new Subject();
  private timeout!: Timeout;

  constructor(
    private readonly api: ResumeService
  ) { }

  public ngOnInit(): void {
    this.api.experience.subscribe((experience: Experience[]) => {
      this.allExperience = experience;
      this.experience$.next(experience);
    })

    this.api.technologies.subscribe((technologies: Technology[]) => {
      const categories: string[] = [];
      this.groupedTechnologies = technologies.reduce((accumulator: any, technology: Technology) => {
          if (Object.keys(accumulator).find((f: string) => f === technology.category)) {
            accumulator[technology.category].push(technology.name);
            return accumulator;
          } else {
            categories.push(technology.category);
            return {
              ...accumulator,
              [technology.category]: [technology.name]
            };
          }
      }, {});
      this.categories$.next(categories);
    });

    this.onKeyUp$
      .pipe(
        takeUntil(this.destroy$),
        distinctUntilChanged(),
        debounceTime(500),
      )
      .subscribe((value: string) => {
        this.hideSpinner$.next(false);
        this.filterExperience(value);
      });
  }

  public ngOnDestroy(): void {
    this.categories$.next([]);
    this.categories$.complete();
    this.experience$.next([]);
    this.experience$.complete();
    this.hideSpinner$.next(true);
    this.hideSpinner$.complete();
    this.onKeyUp$.next("");
    this.onKeyUp$.complete();
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  public onKeyUp(value: any): void {
    this.onKeyUp$.next(value);
  }

  public getCategoryTechnologies(category: string): string[] {
    return (this.groupedTechnologies as any)[category];
  }

  private filterExperience(filterValue: string): void {
    if (!filterValue) {
      this.hideSpinner(100);
      this.experience$.next(this.allExperience);
      return;
    }
    filterValue = filterValue.toLowerCase();
    const filteredResults: Experience[] = [];

    this.allExperience.forEach((exp: Experience) => {
      const json = JSON.stringify(exp).toLowerCase();
      if (json.includes(filterValue)) {
        filteredResults.push(exp);
      }
    });

    this.experience$.next(filteredResults);
    this.hideSpinner();
  }

  private hideSpinner(timeout: number = 500): void {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {
      this.hideSpinner$.next(true);
    }, timeout);
  }

}
