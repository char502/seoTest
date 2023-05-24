## Description

Using the data returned from the API, please add structured data with a review snippet to the page so that Google can display the product pros and cons.

## Documentation

https://developers.google.com/search/docs/data-types/review-snippet
Example of current structured data code for pros and cons

On the products array returned by the API there is an object called information, this is where you will find the product pros and cons fields.

## User story

As Head of Audience, I want Pros and Cons articles to be recognised as pros and cons by Google so that they display as pros and cons snippets in search results.

## Acceptance criteria

1 - Create a component that renders valid structured data (https://developers.google.com/search/docs/data-types/review-snippet)

2 - Create a valid unit test that ensures when there is a valid pros and cons array comming from the api response the application will correctly render the structured data.
