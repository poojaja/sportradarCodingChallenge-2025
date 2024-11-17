let currentDate = new Date(); // Start with the current date

document.addEventListener('DOMContentLoaded', function() {
    fetchEventsAndCreateCalendar();
    setupMonthNavigation();
});

function setupMonthNavigation() {
    const prevButton = document.createElement('button');
    prevButton.innerHTML = '&larr; Previous';
    prevButton.classList.add('btn', 'btn-primary', 'me-2');
    prevButton.addEventListener('click', () => changeMonth(-1));

    const nextButton = document.createElement('button');
    nextButton.innerHTML = 'Next &rarr;';
    nextButton.classList.add('btn', 'btn-primary', 'ms-2');
    nextButton.addEventListener('click', () => changeMonth(1));

    const navigationDiv = document.createElement('div');
    navigationDiv.classList.add('d-flex', 'justify-content-center', 'mb-3');
    navigationDiv.appendChild(prevButton);
    navigationDiv.appendChild(nextButton);

    const calendarEl = document.getElementById('calendar');
    calendarEl.parentNode.insertBefore(navigationDiv, calendarEl);
}

function changeMonth(delta) {
    currentDate.setMonth(currentDate.getMonth() + delta);
    fetchEventsAndCreateCalendar();
}

function fetchEventsAndCreateCalendar() {
    fetch('events.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            createCalendar(data.data);
        })
        .catch(error => {
            console.error('Error fetching events:', error);
            document.getElementById('calendar').innerHTML = '<p class="text-danger">Error loading calendar events. Please try again later.</p>';
        });
}

function createCalendar(events) {
    const calendarEl = document.getElementById('calendar');
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    let calendarHTML = `
        <h2 class="text-center mb-4">${monthNames[currentMonth]} ${currentYear}</h2>
        <div class="row calendar-weekdays">
            <div class="col">Sun</div>
            <div class="col">Mon</div>
            <div class="col">Tue</div>
            <div class="col">Wed</div>
            <div class="col">Thu</div>
            <div class="col">Fri</div>
            <div class="col">Sat</div>
        </div>
    `;

    let dayCount = 1;
    let hasEvents = false;
    
    for (let i = 0; i < 6; i++) {
        calendarHTML += '<div class="row">';
        
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDayOfMonth) {
                calendarHTML += '<div class="col border p-2 calendar-day"></div>';
            } else if (dayCount > daysInMonth) {
                calendarHTML += '<div class="col border p-2 calendar-day"></div>';
            } else {
                const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(dayCount).padStart(2, '0')}`;
                const dayEvents = events.filter(event => event.dateVenue === formattedDate);
                
                calendarHTML += `
                    <div class="col border p-2 calendar-day">
                        <div class="fw-bold">${dayCount}</div>
                        ${dayEvents.map(event => `
                            <div class="small">
                                <span class="event-dot"></span>
                                ${event.homeTeam.name} vs ${event.awayTeam.name}
                            </div>
                        `).join('')}
                    </div>
                `;
                if (dayEvents.length > 0) hasEvents = true;
                dayCount++;
            }
        }
        
        calendarHTML += '</div>';
        
        if (dayCount > daysInMonth) break;
    }

    if (!hasEvents) {
        calendarHTML += '<p class="text-center mt-3">No events scheduled for this month.</p>';
    }

    calendarEl.innerHTML = calendarHTML;
}