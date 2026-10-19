import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({ imports: [ReactiveFormsModule], templateUrl: './contact-page.html', styleUrl: './contact-page.scss' })
export default class ContactPage {

    private readonly fb = inject(FormBuilder);
    private readonly route = inject(ActivatedRoute);
    protected readonly isDemo = this.route.snapshot.data['mode'] === 'demo';
    protected readonly sent = signal(false);
    protected readonly form = this.fb.nonNullable.group(
        {
            name: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.email]],
            institution: ['', Validators.required], role: [''],
            type: ['School', Validators.required],
            message: ['', Validators.required]
        });

    protected submit(): void {
        this.form.markAllAsTouched();

        if (this.form.valid)
            this.sent.set(true)

        const businessNumber = '919398343617';

        const name = this.form.value.name;
        const email = this.form.value.email;
        const institution = this.form.value.institution;
        const type = this.form.value.type;
        const message = this.form.value.message;

        const text = `
            Name        : ${name}\n
            Email       : ${email}\n
            Institution : ${institution}\n
            Type        : ${type}\n
            Message     : ${message}
            `

         const url =
        `https://wa.me/${businessNumber}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");
   

    }

    protected invalid(name: keyof typeof this.form.controls): boolean {

        const c = this.form.controls[name]; return c.invalid && c.touched

    }
}
