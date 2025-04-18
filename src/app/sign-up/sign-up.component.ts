import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  currentStep = 1;
  totalSteps = 3;
  accountType: 'job-seeker' | 'employer' = 'job-seeker';
  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.signupForm = this.fb.group({
      // Step 1: Account Information
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],

      // Step 2: Profile Information - Job Seeker
      firstName: [''],
      lastName: [''],
      jobTitle: [''],
      location: [''],
      experience: [''],

      // Step 2: Profile Information - Employer
      companyName: [''],
      companyWebsite: [''],
      companySize: [''],
      industry: [''],
      companyLocation: [''],

      // Step 3: Skills Information - Job Seeker
      skills: [[]],
      resume: [null],
      jobPreferences: this.fb.group({
        remote: [false],
        hybrid: [false],
        onsite: [false]
      }),

      // Step 3: Skills Information - Employer
      hiringFor: [[]],
      companyLogo: [null],
      companyDescription: [''],

      // Terms agreement
      termsAgreed: [false, Validators.requiredTrue]
    });
  }

  setAccountType(type: 'job-seeker' | 'employer'): void {
    this.accountType = type;
  }

  nextStep(): void {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  isStepValid(step: number): boolean {
    if (step === 1) {
      const stepOneControls = ['email', 'password', 'confirmPassword'];
      return stepOneControls.every(control => 
        this.signupForm.get(control)?.valid || false);
    }
    return true; // For simplicity, other steps don't have validation in this example
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log('Form submitted:', this.signupForm.value);
      
      // Here you would typically send the data to your backend
      // For example with an auth service:
      // this.authService.register(this.prepareUserData()).subscribe(
      //   response => {
      //     // Handle successful registration
      //     this.router.navigate(['/home']);
      //   },
      //   error => {
      //     // Handle registration error
      //     console.error('Registration failed:', error);
      //   }
      // );
      
      // For now, we'll just simulate a successful registration
      // and redirect to the home page
      this.simulateRegistrationAndRedirect();
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.signupForm.controls).forEach(key => {
        const control = this.signupForm.get(key);
        control?.markAsTouched();
      });
    }
  }
  
  // This method simulates a registration process
  private simulateRegistrationAndRedirect(): void {
    // Simulate API call delay (1 second)
    console.log(`Creating ${this.accountType} account...`);
    
    setTimeout(() => {
      // Log success message
      console.log(`${this.accountType} account created successfully!`);
      
      // Save user type to localStorage (optional)
      localStorage.setItem('userType', this.accountType);
      
      // Redirect to home page
      this.router.navigate(['/']);
    }, 1000);
  }
  
  private prepareUserData() {
    const formData = this.signupForm.value;
    const userData = {
      email: formData.email,
      password: formData.password,
      accountType: this.accountType
    };
    
    // Add type-specific fields
    if (this.accountType === 'job-seeker') {
      return {
        ...userData,
        firstName: formData.firstName,
        lastName: formData.lastName,
        jobTitle: formData.jobTitle,
        location: formData.location,
        experience: formData.experience,
        skills: formData.skills,
        jobPreferences: formData.jobPreferences
      };
    } else {
      return {
        ...userData,
        companyName: formData.companyName,
        companyWebsite: formData.companyWebsite,
        companySize: formData.companySize,
        industry: formData.industry,
        companyLocation: formData.companyLocation,
        hiringFor: formData.hiringFor,
        companyDescription: formData.companyDescription
      };
    }
  }

  // Password strength methods
  getPasswordStrength(password: string): number {
    let strength = 0;
    
    if (password?.length >= 8) strength++;
    if (password?.match(/[A-Z]/)) strength++;
    if (password?.match(/[0-9]/)) strength++;
    if (password?.match(/[^A-Za-z0-9]/)) strength++;
    
    return strength;
  }

  getPasswordStrengthLabel(strength: number): string {
    const strengthLabels = ['Weak', 'Fair', 'Good', 'Strong'];
    return strengthLabels[strength - 1] || 'Weak';
  }

  // Skills related methods
  addSkill(skill: string): void {
    const currentSkills = this.signupForm.get('skills')?.value || [];
    if (skill && !currentSkills.includes(skill)) {
      this.signupForm.get('skills')?.setValue([...currentSkills, skill]);
    }
  }

  removeSkill(skillToRemove: string): void {
    const currentSkills = this.signupForm.get('skills')?.value || [];
    this.signupForm.get('skills')?.setValue(
      currentSkills.filter((skill: string) => skill !== skillToRemove)
    );
  }

  // Hiring positions methods
  addHiringPosition(position: string): void {
    const currentPositions = this.signupForm.get('hiringFor')?.value || [];
    if (position && !currentPositions.includes(position)) {
      this.signupForm.get('hiringFor')?.setValue([...currentPositions, position]);
    }
  }

  removeHiringPosition(positionToRemove: string): void {
    const currentPositions = this.signupForm.get('hiringFor')?.value || [];
    this.signupForm.get('hiringFor')?.setValue(
      currentPositions.filter((position: string) => position !== positionToRemove)
    );
  }

  // File handling methods
  onFileSelected(event: any, controlName: string): void {
    const file = event.target.files[0];
    if (file) {
      this.signupForm.get(controlName)?.setValue(file);
    }
  }
}