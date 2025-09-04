import { Component } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Workshops } from '../workshops';

@Component({
    selector: 'app-add-workshop',
    standalone: true,
    imports: [
      ReactiveFormsModule
    ],
    templateUrl: './add-workshop.html',
    styleUrl: './add-workshop.scss',
})
export class AddWorkshop {
    addWorkshopForm!: FormGroup;
    id!: number;
    isEditing = false;

    constructor(
      private fb : FormBuilder,
      private workshopsService: Workshops,
      private router: Router,
      private activatedRoute: ActivatedRoute
    ) {

        // EXERCISE: Create a FormGroup variable for the form. Group address, city, state under a separate FormGroup as "location". Group the 2 checkboxes under "modes". On submit of the form. Log the value of the form.
        const idStr = this.activatedRoute.snapshot.paramMap.get('id');

        if (idStr === null) {
            this.isEditing = false;
        } else {
            this.id = +idStr;
            this.isEditing = true;

            // @todo Fetch the details of the workshop being edited, and populate the form controls
            // Step 1: get the details of workshop with given id
            // Step 2: (inside next) once we get the details, we can use this.addWorkshopForm.patchValue()
            this.workshopsService.getWorkshopById(this.id).subscribe({
                next: (workshop) => {
                    // if you use setValue, the value you pass (in this case `workshop`), should not have any extra / missing fields
                    // to take care of difference in format of dates in the backend, and the date format of datepicker
                    workshop.startDate = workshop.startDate.substring(0, 10);
                    workshop.endDate = workshop.endDate.substring(0, 10);

                    this.addWorkshopForm.patchValue(workshop);
                },
                error: () => {
                    alert(
                        `Something went wrong fetching workshop details. Please reload the page.`
                    );
                },
            });
        }

        this.addWorkshopForm = this.fb.group({
          name: ['', [Validators.required]],
          category: ['', [Validators.required]],
          description: ['', [Validators.required]],
          startDate: ['', [Validators.required]],
          endDate: ['', [Validators.required]],
          time: ['', [Validators.required]],
          location: this.fb.group({
              address: ['', Validators.required],
              city: ['', Validators.required],
              state: ['', Validators.required],
          }),
          modes: this.fb.group({
              inPerson: this.fb.control(false),
              online: this.fb.control(false),
          }),
          imageUrl: ['', [Validators.required]],
      });
    }

    addWorkshop() {
        if (this.isEditing) {
        this.workshopsService
            .putWorkshop(this.addWorkshopForm.value, this.id)
            .subscribe({
                next: (workshop) => {
                    alert(
                         `Successfully updated workshop with id ${workshop.id}`
                        );

                    this.router.navigateByUrl('/workshops');
                },
                error: (error) => {
                    alert(
                        `Could not edit workshop | ${error.message}`);
                },
            });
    } else {
        this.workshopsService
            .postWorkshop(this.addWorkshopForm.value)
            .subscribe({
                next: (workshop) => {
                    alert(`Successfully added workshop - ${workshop.name}`,
                        );

                    this.router.navigateByUrl('/workshops');
                },
                error: (error) => {
                    alert( `Could not add workshop | ${error.message}`);
                },
            });
    }
    }
}