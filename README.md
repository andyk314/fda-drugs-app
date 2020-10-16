# README

pre-requisites
rails 6.0.3.2
ruby 2.7.1
yarn 1.22.5
mysql

git clone
rake db:create
main app dir: rails s -p 3001 #this will be your API backend
in openfda-drugs-client: yarn start #this will be your frontend

app should be able to run in development environment
don't worry about deploying

Problems:

1. Create an API to be able to search for Pharmaceuticals by brand name.
2. Display search results on your react frontend.
3. Add the ability to order search results by brand name (alphabetical), dosage form, and product number, both via the API and front end.
4. Add the ability to click on a product and store the search conversion.
5. Display the number of conversions on the same page as your search results.

Show off what you can do.

Please don't spend more than 4 hours on this assignment total.

For more information on how the openFDA API works, please review:
https://open.fda.gov/apis/drug/drugsfda/explore-the-api-with-an-interactive-chart/