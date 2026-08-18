---
layout: project
title: "Credit Card Default Prediction ML"
slug: credit-card-default-prediction
category: "Data Science & AI"
date: 2024-09-15
featured: true
order: 4
status: "Completed"
github: "https://github.com/vishwas2628/Credit-Card-Default-Prediction"
demo: ""
tech_stack:
  - "Python"
  - "Jupyter Notebook"
  - "Pandas"
  - "NumPy"
  - "Scikit-Learn"
  - "Matplotlib / Seaborn"
summary: "Machine learning pipeline analyzing financial customer records to accurately classify and predict credit card payment defaults."
---

## 🎯 Overview

Credit card default prediction is a critical challenge in financial risk management. This project develops an end-to-end predictive machine learning model to identify high-risk accounts before default occurs.

Using an extensive dataset of demographic indicators, credit limit amounts, past payment histories, and bill statement amounts, the model achieves high classification accuracy and recall.

---

## 📊 Pipeline Methodology

1. **Exploratory Data Analysis (EDA)**: Correlation heatmaps, bill vs. repayment distribution analysis, and demographic breakdown.
2. **Data Preprocessing & Cleaning**: Outlier detection, missing value imputation, and categorical feature encoding.
3. **Feature Engineering**: Ratio of payment amount to bill statement, payment timeliness trends over consecutive 6-month windows.
4. **Model Training & Comparison**:
   * Logistic Regression (Baseline)
   * Random Forest Classifier
   * Gradient Boosting / XGBoost
5. **Evaluation Metrics**: Precision, Recall, F1-Score, and ROC-AUC curve analysis.
