# SAP Fiori application to implement testing tools

[![SAPUI5][SAPUI5]][SAPUI5-url] &emsp; [![QUnit][QUnit]][QUnit-url] &emsp; [![OPA5][OPA5]][OPA5-url] 

<!-- ABOUT -->
## About the project

**Introduction**

This application aims to implement and run various test tools listed in the following section.
The application will rely on the free public OData service [Northwind](https://services.odata.org/).


**Testing tools**
- [QUnit](https://sapui5.hana.ondemand.com/sdk/#/topic/09d145cd86ee4f8e9d08715f1b364c51) a JavaScript unit testing framework
- [OPA5](https://sapui5.hana.ondemand.com/sdk/#/topic/2696ab50faad458f9b4027ec2f9b884d) integration testing with one-page acceptance tests

**Built with**

- [SAPUI5](https://sapui5.hana.ondemand.com/) a web framework based on JavaScript and HTML5 that is used to develop user interfaces for SAP applications.


## Starting the app

-   In order to launch the application, first run the following command to install the necessary dependencies from the application root folder:

```
    npm install
```

-   Then simply run the following from the application root folder:

```
    npm start
```

## Running the tests

The tests are launched from the root folder of the application.

-   Run all tests:

```
    npx fiori run --open test/testsuite.qunit.html
```

-   Run ***QUnit*** tests:

```
    npx fiori run --open test/unit/unitTests.qunit.html
```

-   Run ***OPA5*** tests:

```
    npx fiori run --open test/integration/opaTests.qunit.html
```


<!-- DEV -->
## Developpement roadmap
 1. Generate the application and create the test pages 
 2. Connect the application with the OData Northwind service
 3. ...

<!-- AUTHOR -->
## Author
Valentin Cadart - cadartv@gmail.com | valentin_cadart@ens.univ-artois.fr 

*[Project Link](https://github.com/ValentinCadart/fioriTestsImplementation/)*


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!-- https://simpleicons.org/ -->
[SAPUI5]: https://img.shields.io/badge/SAPUI5-0FAAFF?style=for-the-badge&logo=sap&logoColor=white   
[SAPUI5-url]: https://sapui5.hana.ondemand.com/
[QUnit]: https://img.shields.io/badge/QUnit-9C3493?style=for-the-badge
[QUnit-url]: https://qunitjs.com/
[OPA5]: https://img.shields.io/badge/OPA5-3b5b7c?style=for-the-badge
[OPA5-url]: https://sapui5.hana.ondemand.com/sdk/#/topic/2696ab50faad458f9b4027ec2f9b884d