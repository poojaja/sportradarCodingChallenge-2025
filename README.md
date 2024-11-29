# sportradarCodingChallenge-2025
SPORTRADAR – 2025 Coding Academy Vienna – Coding Challenge
This is code repository for Frontend Coding Exercise for "SPORTRADAR – 2025 Coding Academy Vienna – Coding Challenge".
The challenge is spread across 5 tasks as follows and i have completed 2 tasks.

Overview: 

Task 1 – Calendar View 

• Objective: Implement a calendar view that displays sports events. 
    • Instructions: 
        o Create a calendar interface for the current month. 
        o Display the days of the month in a grid format. 
        o Indicate days that have scheduled sports events. This can be as simple as a dot or marker on the day. 
        o (Optional) Show brief information about the events on the calendar (e.g., event name on the day cell). 
    • Sample Events to Include (you can leverage the json file shared to get events): 
        o Sat., 18.07.2019, 18:30, Football, Salzburg vs. Sturm 
        o Sun., 23.10.2019, 09:45, Ice Hockey, KAC vs. Capitals

Task 2 – Event Detail Page 

• Objective: Provide a way to view full details of a specific event. 

    • Instructions: 
        o Implement functionality so that when a user clicks on an event marker on the calendar, they are taken to a detail page. 
        o The detail page should display all relevant information about the event, such as date, time, sport, teams/participants, and any other details you consider important.


### How to Run the Code

Please follow these steps to run the code:

1. **Clone the Repository**: Sync the repository to your local machine.
2. **Navigate to the Project Directory**: Open your terminal and navigate to the folder where the code is downloaded.
3. **Start the Local Server**: Run the following command to start a local server:
   
   python -m http.server 8000

Browse to the following link 

http://127.0.0.1:8000/task02/

Note: Each subfolder is for each task and the next task builds on the earlier code, so if you are in folder task 2 then it will also have code for task 01 and 02.

Assumptions and decisions:
    • The provided json file had issue with one event, that event was removed making the asumption we will have all the details in json file.
    • Used Material design bootstrap for responsive behaviour.
    • Created my own css for creating home page (index.html) and used css and java script from material design framework.
    • Created my own js file to read and present the json content from events.json.
    • Used perplexity.ai to help me with my coding.