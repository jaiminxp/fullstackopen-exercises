```mermaid
sequenceDiagram
    title: Scenario - User creates a new note
    participant browser
    participant server

    Note over browser: User submits the form
    browser->>server: POST /exampleapp/new_note
    Note right of browser: (1) Browser sends form data to server

    activate server
    note over server: (2) Server adds the new note and date to the notes array
    server-->>browser: (3) Redirect to /notes

    browser->>server: GET exampleapp/notes
    Note right of browser: (4) Browser reloads the /notes page
    server-->>browser: (5) /notes HTML Document

    Note over browser: (6) Browser finds links to main.css and main.js files
    browser->>server: (7) GET /exampleapp/main.css
    activate server
    server-->>browser: (8) main.css file
    deactivate server

    browser->>server: (9) GET /exampleapp/main.js
    activate server
    server-->>browser: (10) main.js file
    deactivate server

    Note over browser: main.js execution start

    browser->>server: (11) AJAX Request GET /exampleapp/data.json
    activate server
    server-->>browser: (12) data.json file (notes array)
    deactivate server

    Note right of browser: (13) Callback function parses the JSON and renders notes as list items

    Note over browser: main.js execution end