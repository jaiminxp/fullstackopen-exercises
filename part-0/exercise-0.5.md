```mermaid
sequenceDiagram
    title: Scenario - User naviagtes to SPA
    participant browser
    participant server

    browser->>server: (1) GET /exampleapp/spa

    activate server
    server-->>browser: (2) HTML Document
    deactivate server

    
    Note over browser: (3) Browser finds links to main.css and spa.js files
    browser->>server: (4) GET /exampleapp/main.css
    activate server
    server-->>browser: (5) main.css file
    deactivate server

    browser->>server: (6) GET /exampleapp/spa.js
    activate server
    server-->>browser: (7) spa.js file
    deactivate server

    Note over browser: spa.js execution start

    browser->>server: (8) AJAX Request GET /exampleapp/data.json
    activate server
    server-->>browser: (9) data.json file (notes array)
    deactivate server

    Note right of browser: (10) Callback function parses the JSON response
    Note right of browser: (11) redrawNotes() function renders notes as list items

    Note over browser: spa.js execution end