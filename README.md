# sportradarCodingChallenge-2025
SPORTRADAR – 2025 Coding Academy Vienna – Coding Challenge
This is code repository for Frontend Coding Exercise for "SPORTRADAR – 2025 Coding Academy Vienna – Coding Challenge".
The challenge is spread across 5 tasks as follows.

Overview: 

The goal of this exercise is to assess your understanding of basic frontend programming concepts, 
including building user interfaces, handling user interactions, and ensuring responsiveness across 
devices. You will create a sports event calendar that displays events, allows users to view event details, 
and lets users add new events during runtime.


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

Task 3 – Add Event Functionality 

• Objective: Allow users to add new events during runtime. 

    • Instructions: 
        o Create a form where users can input details for a new event (e.g., date, time, sport, teams/participants). 
        o Implement the functionality to add the new event to the calendar view. 
        o Note: It is not required to save the data persistently (e.g., no need to use a database or local storage). The new event can exist only during the current session (runtime).

Task 4 – Responsiveness 

• Objective: Ensure the site is fully responsive on mobile and tablet devices. 

    • Instructions: 
        o Use responsive design techniques to make sure the calendar view and all pages adapt to different screen sizes. 
        o Test your site on various screen widths to ensure usability on mobile phones, tablets, and desktops. 
        o Pay attention to layout, readability, and touch interactions on smaller screens.

Task 5 – Navigation 

• Objective: Create a simple navigation system within your application. 
    • Instructions: 
        o Implement a navigation bar or menu that allows users to switch between the calendar overview and the "Add Event" page. 
        o Ensure the navigation is accessible from all pages. 
        o The design can be minimal; focus on functionality.

Additional Features (Optional) 
    • Filters: 
        o Implement filters to allow users to view events based on specific criteria (e.g., by sport, date range). 
    • Styling and Enhancements: 
        o Add CSS styling to improve the visual appeal of your application. 
        o Use animations or transitions for a better user experience. 
    • Persistent Storage: 
        o Store events using local storage or any other method to retain data between sessions. 
    • Testing: 
        o Write tests to verify that your code works as expected. 
        o Use any testing framework or method you are comfortable with.

### How to Run the Code

Please follow these steps to run the code:

1. **Clone the Repository**: Sync the repository to your local machine.
2. **Navigate to the Project Directory**: Open your terminal and navigate to the folder where the code is downloaded.
3. **Start the Local Server**: Run the following command to start a local server:
   
   python -m http.server 8000

Note: Each subfolder is for each task and the next task builds on the earlier code, so if you are in folder task 5 then it will also have code for challenge 01 to 04.

Assumptions and decisions:
    •
    •
    •
    •