# Town Today

Ignore town-today-client-crna. It was created with create-react-native-app.

The active project for the client is "town_today_client"

------------------------------------------------------------------------------

To run this project:

First, download Android Studio and setup the emulator.

Then, open the project in Android Studio by selecting 
"Open an existing Android Studio project," navigating to
the project folder, and selecting the folder named "android."

Install any updates as required by Android Studio by clicking on
the red links.

Then, fire up the emulator and run the following commands:

1. git clone git@github.com:richarddprasad/town-today.git

2. cd town-today/town_today_client/

3. yarn install

4. react-native run-android

(You can also upload the app to your phone if you don't
want to use the emulator. Google instructions for turning
on developer mode on Android devices. You will also need
to accept the RSA key and enable USB debugging).

------------------------------------------------------------------------------

TODOs:

0. Learn flexbox

1. Get rid of underlay style for TouchableHighlight in CategoryListComponent?
--> Make item stand out more when clicked on

2. Create templates for other views: EventDetail
3. Implement redux store
4. Replace stand-in icon fonts in navigation drawer

X 5. Get bottom menu bar stub to display correctly <<-- More or less done

6. Finish implementing bottom menu bar
--> Add supplied icons to each button
--> Add event handlers to each button
--> Style

7. Integrate login screen
--> Code added, but doesn't display correctly

8. Integrate category selection screen
9. Change drawer background color
10. Get rid of line under category titles
11. Replace stand-in image in drawer with Town Today logo
