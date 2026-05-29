---
layout: page
title: Stock Directional Forecasting
description: Predicting next-day NVIDIA price direction using ensemble ML models over 10 years of OHLCV data.
img: assets/img/7.jpg
importance: 2
category: work
---

## Overview

Forecasts the **next-day directional movement** of NVIDIA stock (2016–2025) using classical machine learning, framed within the Efficient Market Hypothesis.

## Feature Engineering

A 20-feature pipeline from raw OHLCV data:
- 20-day rolling indicators (SMA, EMA, volatility)
- Short-term lag features (1–5 day returns)
- 15+ low-signal features deprioritized after selection

## Results

| Model | Directional Precision |
|---|---|
| Random Walk Baseline | 42.7% |
| L2 Logistic Regression | ~54% |
| Random Forest | ~55% |
| **Soft Voting Ensemble** | **57.3%** |

The ensemble outperformed the random-walk baseline by **14.6 percentage points**.

## Key Finding

Despite the precision gain, absolute accuracy is modest — consistent with the EMH: short-term movements in liquid markets are largely unpredictable.

## Stack

R · ARIMA · Logistic Regression · Random Forest · Soft Voting Ensemble
