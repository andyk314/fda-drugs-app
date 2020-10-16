# README

# Pre-Requisites
1. rails 6.0.3.2
2. ruby 2.7.1
3. yarn 1.22.5
4. mysql

# Setup
1. git clone git@github.com:Honeybee-Health/openfda-drugs.git
2. rake db:create
3. main app dir: `rails s -p 3001` (this will be your API backend)
4. in openfda-drugs-client: `yarn start` (this will be your frontend)
5. change your git remote origin to a newly created repo under your github account.

# Interview Problems:

1. Create an API to be able to search for pharmaceuticals on the openFDA API by brand name.
2. Display search results on your react frontend.
3. Add the ability to order search results by brand name (alphabetical), dosage form, and product number, both via the API and front end.
4. Add the ability to click on a product and store the search conversion.
5. Display the number of conversions on the same page as your search results.

The application should be able to run in development environment.
Please don't deploy this app. We will be cloning your response and running in the development environment.

Show off what you can do.

Please don't spend more than 4 hours on this assignment total.

For more information on how the openFDA API works, please review:
https://open.fda.gov/apis/drug/drugsfda/explore-the-api-with-an-interactive-chart/

Copyright Honeybee Health, Inc. 2020