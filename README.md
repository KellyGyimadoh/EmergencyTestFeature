This project demonstrates how to implement real-time emergency alerts using Laravel Broadcasting and Events. The system allows users to trigger emergency alerts, which are then broadcasted to all connected clients in real-time.

Before you begin, ensure you have the following installed:
PHP (>= 7.3)
Composer
Node.js and NPM
Laravel (latest version)
############################
1.Clone Repo
git clone https://github.com/your-repo/emergency-alert-system.git
cd emergency-alert-system

2.Install Dependencies
composer install
npm install

3.Update your .env file with the necessary configurations. Ensure you have the following broadcasting and queue-related configurations:
BROADCAST_DRIVER=log
QUEUE_CONNECTION=sync
OR
BROADCAST_DRIVER=reverb 
QUEUE_CONNECTION=database (if you have a database manager..recommended xampp)

4.create and migrate database
php artisan migrate

5.If you're using Laravel 11 with built-in WebSockets, you can skip additional WebSocket server setups and use the default setup.
and compile asset by inserting npm run dev 

6. Start the Queue Worker To process events and broadcasts:
php artisan queue:work

7.Finally, run the Laravel development server:
php artisan reverb:start

8.Register an account. or you can use php artisan tinker and create user by
User::create(['name' => 'Admin', 'email' => 'admin@example.com', 'password' => bcrypt('password')]);


9.Navigate to the page where you can trigger the emergency alert. Click the Send Alert button, and the emergency message will be broadcasted in real-time to all connected clients.

##################################################
HOW IT WORKS
1.Event Creation:
Create an event named EmergencyEvent. This event will carry the emergency messag. check /apps/Events

2.Triggering the Event:
In the controller, trigger the EmergencyEvent whenever the user clicks the Send Alert button.
No extra features were added thus check route/web.php to see how event is triggered..

3.JavaScript for Real-Time Notification:
In the JavaScript file located in resources/app/app.js, use Laravel Echo to listen for the EmergencyEvent on the emergencytest channel and display the emergency alert.

4.Running the System
To fully activate the real-time features, ensure the following commands are running in separate terminals:
a. php artisan queue:work
b. npm run dev
c. php artisan reverb:start
d.Run two separate browser windows to test. one could be enough too.

CONCLUSION
Notes
Laravel 11 has simplified the broadcasting process. No need for additional services like Redis or Pusher.
The real-time notifications work by broadcasting events to a specific channel and then listening for those events on the frontend.
Ensure you have configured your broadcasting and queue drivers correctly in the .env file