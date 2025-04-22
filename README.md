# Task - Multi-Step Form Application

A multi-step form application built using React, TypeScript, and other modern libraries. This project implements form handling with React Hook Form, state management with Zustand, and utilizes TailwindCSS for styling.

## Features

1. **Multi-Step Form**: The form is divided into 3-4 steps/pages.
    - **Step 1**: Name (required), Email (required)
    - **Step 2**: Address (required), Phone Number (required)
    - **Step 3**: Multi-select items (e.g., categories, preferences, etc.)
    - **Step 4**: Review all entered data before submission
2. **Validation**: Each field is required and validated before moving to the next step.
    - Name, Address, and Phone must not be empty.
    - Email should be a valid format.
    - Phone should be numeric.
3. **Form Submission**: After submitting the form:
    - Display the submitted data in a list or card view.
    - Each submission should appear below the form.
4. **Save Form Progress**: 
    - If the user refreshes the page before submitting, the form retains the entered data.
    - Users can continue from where they left off by storing the data in `localStorage`.

### Bonus Features:
- **Reset/Discard** button to clear the form and `localStorage`.

## Tools/Libraries Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **React Hook Form**: Form management library to handle form validation and state.
- **Tailwind CSS**: A utility-first CSS framework for building responsive, custom designs.
- **Zustand**: A fast, small state management tool for React.
- **clsx**: Utility for constructing `className` strings conditionally.
- **react-toastify**: Library for showing toast notifications.
- **react-multi-select-component**: Multi-select dropdown component for React.
- **tailwind-merge**: Utility to merge TailwindCSS classnames.
- **Vite**: A fast, next-generation build tool for modern web projects.

## Setup and Installation

### 1. Clone the repository

```bash
git clone https://github.com/sajib925/fe-task

cd fe-task

pnpm i

pnpm dev

