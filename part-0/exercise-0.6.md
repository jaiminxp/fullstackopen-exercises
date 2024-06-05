```mermaid
sequenceDiagram
    title: Scenario - User creates a new note in SPA
    participant browser
    participant server

    Note over browser: (1) User submits the form
    Note over browser: (2) onSubmit() callback function is called
    Note over browser: (3) The new note is pushed to notes array 
    Note over browser: (4) Form input is reset
    Note over browser: (5) Browser re-renders the notes list
    Note over browser: (6) sendToServer() is called

    browser->>server: AJAX POST /exampleapp/new_note_spa
    Note right of browser: (7) Browser sends new note content and date to the server

    activate server
    Note over server: (8) Server adds the new note and date to the notes array
    server-->>browser: (9) 201 Created
    Note left of server: Response = { "message": "note created" }

    Note over browser: (10) The AJAX response is printed to the console