# IT3040 Assignment 1 - Test Automation Project

**Student Registration Number:** ITxxxxxxx  
**Project:** Thanglish to Tamil Transliteration Automation  
**Target Website:** [Tamil Changathi](https://tamil.changathi.com/)  
**Tools Used:** Playwright, TypeScript, VS Code

## 📌 Project Overview
This repository contains an automated test suite designed to verify the functionality of the "Thanglish to Tamil" transliteration tool. The automation mimics human typing behavior to ensure accurate phonetic conversion.

## 🧪 Test Scenarios
The suite covers **35 Test Cases** categorized into:
1.  **Positive Functional Testing:** Verifying correct sentence conversion.
2.  **Negative/Robustness Testing:** Handling typos, numbers, and symbols.
3.  **UI Testing:** Verifying the interface response.

## 🚀 How to Run the Tests
1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Run Automation (Visible Mode):**
    ```bash
    npx playwright test --headed
    ```
3.  **View HTML Report:**
    ```bash
    npx playwright show-report
    ```

## 📂 Project Structure
- `tests/assignment1.spec.ts`: Main automation script.
- `playwright.config.ts`: Configuration for timeouts and browser settings.
- `README.md`: Project documentation.