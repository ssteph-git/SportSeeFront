# 0.Prerequisites (NodeJS)

# 1.without backend
## 1.a.Install dependencies (npm i)
## 1.b.Open file "data.js" in folder "service" (./src/service/Data.js)
#  1.c.Change the second line to "false" (const mockedData = false;)
#  1.d.Starting the project (npm start)

# 2.With the backend
#  2.a.Install backend in the port 3000(https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
#  2.b.Install the project
#  2.c.Open file "data.js" in folder "service" (./src/service/Data.js)
#  2.d.Change the second line to "true" (const mockedData = false;)
#  2.e.Starting the project (npm start)

# 3.With both
## 3.a.This project includes four endpoints that you will be able to use:

    http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
    http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
    http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
    http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).

Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.
## 3.b Examples of queries

    http://localhost:3000/user/12/performance - Retrieves the performance of the user with id 12
    http://localhost:3000/user/18 - Retrieves user 18's main information.
