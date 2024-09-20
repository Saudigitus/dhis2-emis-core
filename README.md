# SEMIS App

The **SEMIS** app is a  student-staff-school management suite developed in collaboration with Ministries of Education in the Global South. Tailored to meet core needs for enrolling and managing students and staff, SEMIS empowers staff to efficiently handle tasks like attendance tracking, promotion, repetition, transfers, graduation, and managing assessment data. The app supports both web-based and offline Android mobile data entry, ensuring accessibility even in low-connectivity regions.


![SEMIS Home](https://github.com/user-attachments/assets/38eb3297-5dd6-4f56-b2ca-643711edee96)

---

## Release Notes (v1.3.0 - 20240919)

### ✨ New Features ✨

#### 1. **Enrollment**

- **Bulk Enrollment Updates**:
  - Export enrollment data for bulk updates.
  - Import data to streamline bulk enrollment changes.
- **Responsive Design**:
  - Fully optimized for seamless use on smaller devices.
- **Staff Re-enrollment**:
  - Easily re-enroll staff members in bulk with an enhanced workflow.

#### 2. **Attendance**

- **Bulk Attendance Updates**:
  - Export bulk attendance records with customizable date ranges.
  - Import attendance data to manage bulk updates efficiently.

#### 3. **Performance**

- **Bulk Marks Upload**:
  - Import bulk data to create or update student marks.
  - Export student marks in bulk for easier reporting.
- **Set Mark Limits**:
  - Define and apply program rules to set mark limits.
- **Subject Display by Grade**:
  - Automatically display relevant subjects based on the student’s grade, using program rules.

#### 4. **Final Results**

- **Bulk Final Decision Upload**:
  - Import bulk data for creating or updating final student decisions.
  - Export final decision data in bulk for simplified reporting.

#### 5. **Configuration App**

- **Wizard Configuration**:
  - A new wizard-based interface to simplify configuration and update tasks.

---

### 🛠 ️Solved Issues  🛠️

- **Performance Data Loading**: Resolved an issue where data loading times were delayed in certain cases. Now, the interface will only be accessible once all data is fully loaded, ensuring a smoother user experience.
- **Enrollment Date Update**: Fixed a bug that caused errors when updating the enrollment date, ensuring the process is now seamless and error-free.
- **Label Descriptions**: Multiple corrections have been made to label descriptions for greater clarity and accuracy.
- **Inactive Student Status**: Fixed an error where setting a student to INACTIVE status did not always reflect correctly in the table. This issue has been resolved, ensuring accurate data updates.
- **Data Element Name in Forms**: The data entry form now shows the "DataElement Form Name" instead of the "Data Element Name," improving clarity in the data entry process.
- **Invalid Time Value**: Fixed an error related to invalid time values, improving system stability and preventing potential crashes.
- **Enrollment Update Handling**: Improved handling of enrollment update failures due to missing data, ensuring the system provides a clear error message and prevents interruptions.

---

## Installation Files

Download the latest version of SEMIS from the following links:
- [Configuration App](https://github.com/Saudigitus/dhis2-emis-config/releases/tag/v1.3)
- [Enrollment](https://github.com/Saudigitus/dhis2-emis-enrollment/releases/tag/v1.3)
- [Attendance](https://github.com/Saudigitus/dhis2-emis-attendance/releases/tag/v1.3)
- [Performance](https://github.com/Saudigitus/dhis2-emis-performance/releases/tag/v1.3)
- [Transfer Line List](https://github.com/Saudigitus/dhis2-emis-transfer-student/releases/tag/v1.3)
- [Transfer Execute](https://github.com/Saudigitus/dhis2-emis-transfer-student-execute/releases/tag/v1.3)
- [Final Result](https://github.com/Saudigitus/dhis2-emis-final-result/releases/tag/v1.3)

---

## Instructions to run SEMIS locally

This project was bootstrapped with [DHIS2 Application Platform](https://github.com/dhis2/app-platform).

In the project directory, you can run:

`yarn start`
Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- The page will reload if you make edits.
- You will also see any lint errors in the console.

`yarn test`
Launches the test runner and runs all available tests found in `/src`.

- See the section about running tests for more information.

`yarn build`
Builds the app for production to the `build` folder.

- It correctly bundles React in production mode and optimizes the build for the best performance.
- The build is minified and the filenames include the hashes.
- A deployable `.zip` file can be found in `build/bundle`!
- See the section about building for more information.

`yarn deploy`
Deploys the built app in the `build` folder to a running DHIS2 instance.

- This command will prompt you to enter a server URL as well as the username and password of a DHIS2 user with the **App Management** authority.
- You must run `yarn build` before running `yarn deploy`.
- See the section about deploying for more information.
