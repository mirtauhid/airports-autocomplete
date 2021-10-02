# Airports-Autocomplete

[![Build Status](https://travis-ci.org/konsalex/Airport-Autocomplete-JS.svg?branch=master)](https://travis-ci.org/konsalex/Airport-Autocomplete-JS)

## Airport autocomplete data for node applications

This package will provide you data of all airports all over the world to use.

## **Contents**

1. [Installation](#installation)
2. [Usage](#usage)

## Intro

This package depends on axios in order to make request for airports json data.

This package developed for using in the node application for airports data to implement in anykind of travel, air-ticketing, air-tracking website.

---

## Installation

```
npm i airports-autocomplete
```

## Usage

```
const airports = require('airports-autocomplete');

airports()
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

```
