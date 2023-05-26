## Task Submission:

As per the Instructions, I have added added structured data with a review snippet

- Index.tsx will render the first product in the products array with its pros and cons data
- (I Initially thought I should map through the array of phones and have a dynamic route to a page template showing pros and cons for each phone (on clicking on a link for each phone to route to the detail page) and put the structured data on this page. However, on re-reading I not sure what this is what was asked for.
- I think it was just to show the structured data and just have one page of detail as as example so this is what Index.tsx renders

- On line 2 - Index.tsx imports the StructuredData (in capital letters) template which I have created which can be found in: "../components/StructuredData";
- I have created a structuredData (lower case 's') object (on line 54) to use with this template 
- I have combined the template and the object on line 107: `<StructuredData data={structuredData} />`

- From what I understand this will inject the script tag (containing the structured data) into the <head> of the HTML document in the final build so it can be tested with Google's rich results test

- To run the test in google the app has to be deployed, I have done this using Vercel and the app can now be viewed using this URL: https://seo-test-1tqg-char502.vercel.app/
  
- Adding the URL to Google's rich test result shows a valid Review and Product snippet (see image below)
  
  ![Valid Item on google rich results test](https://github.com/char502/seoTest/assets/26301342/e6bc25ac-25bf-47ce-9db1-a034dc6618e9)

- Schema.org is also not reporting any errors of warning with the structured data object I have created:
  
  ![Pros and cons formatting without warnings](https://github.com/char502/seoTest/assets/26301342/fbcfeba6-1dfd-489f-805e-1a9c987ce0dd)

 - I have then written a test to check that the correct data is being rendered.
  Notes on the test:
    - The data is already local so I haven't created mock data but in the real world the data would be mocked so data fetching would not interfere with the test
    - The mocked data would be in TypeScript containing the interfaces I have described in Index.tsx, and passed into the test component as a prop) to show that the data was coming from a valid pro and cons array (I would have done this but ran out of time)
  
  
I hope this is ok


## Instructions:

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
