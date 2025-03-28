# Module2Exam

## Setup

### Fork repo

1. Fork this repo onto your Github account

2. Clone down and Use For Your Own Purposes. You will not be allowed to push into the Exam repo. If you run into the error, come back and re-read these instructions.

3. Create a folder in your repo and name it Project

4. Create 3 files: 
    - index.html 
    - styles.css
    - script.js

5. Follow the instructions. They're available below AND in the sample.html page.

6. Commit and push your changes to your repo.

7. Make sure the link to your repo is included in your exam submission.

8. Prepare for Module 3.

## Requirements

<header>
                <h1>Code Crunch</h1><p>Have a Bite, while you Code</p>
            </header>
            <div class="flex">
                <img src="./sample/assets/CodeCrunchText.jpg" alt="Logo for Your New Page"/>
                <blockquote>Your task is to recreate this webpage for CodeCrew's newest division called CodeCrunch. The required features are detailed below.</blockquote>
            </div>
            <h2>REQUIREMENTS</h2>
            <p>In your new page, make the following <b>Updates:</b>
                <ul>
                    <li>The Main element should contain a custom layout. <input type="checkbox" />
                        <ul>
                            <li>
                                User Story: The user should find themselves on a page detailing CodeCrunch in the main element, Code Resources should remain available in the left sidebar, a new feature will be implemented in a right sidebar that you will be building.
                            </li>
                            <li>
                                Note: Include at least 1 image, the provided './assests/CodeCrunch.jpg' is fine. AI generated or otherwise sourced is also welcome if time permits.
                            </li>
                            <li>
                                The Main element shouldn't contain the instructions from this page.
                            </li>
                        </ul>
                    </li>
                </ul>
            </p>
            <p>To the right of this blue box, add a new sidebar that has the following <b>Features:</b>
                <ul>
                    <li>The Sidebar should be the same height as the current sidebar and main content areas <input type="checkbox"/></li>
                    <li>The Sidebar should have 1 Button that opens a prompt box <input type="checkbox"/>
                        <ul>
                            <li><span>User Story: </span>Upon clicking the button, a Prompt should ask the user for their (first) name</li>
                            <li><span>Note: </span>Whatever the user enters should be stored in a variable that will be accessible to future functions</li>
                        </ul>
                    </li>
                    <li>The Sidebar should have 1 Button that open an alert box <input type="checkbox"/>
                        <ul>
                            <li><span>User Story: </span>Upon clicking the button, an Alert box should contain a greeting (of your choice) that is addressing the User</li>
                            <li><span>Note: </span> This greeting should be concatenated with the variable created from the prompt box</li>
                            <li>Example text for the alert box: Salutations, DJ!</li>
                        </ul>
                    </li>
                    <li>The Sidebar should have 1 Form that generates food orders <input type="checkbox"/>
                        <ul>
                            <li><span>User Story: </span>The user should be able to select how many burgers and how many drinks they want to order </li>
                            <li>Upon clicking the button, their order should be added to an array of order objects and displayed on the page </li>
                            <li>Each order should have a button to remove it from the page</li>
                            <li><span>Note: </span>In the browser, each order should look like: 
                                <ul>
                                    <li>
                                        <code> Kel, 🍔🍔, 🥤🥤 <button class="deliver">Deliver</button> </code>
                                    </li>
                                    <li>If an item is ordered 3 times or less in a single order, show an emoji for each item.</li>
                                    <li>For item quantities 4 and above, display the single emoji followed by x and the quanity.</li>
                                    <li>Examples: 🍔x4, 🥤🥤🥤, 🥤x5, 🍔</li>
                                </ul>
                            </li>
                            <li>In code, each order should look like: 
                                <ul>
                                    <li>
                                        <code>{ Name: Kel, Burgers: 2, Drinks: 2, Delivered: <span id="sampleBool">false</span>} </code>
                                    </li>
                                </ul>
                            </li>
                            <li>The name on the order should be populated by the Prompt box</li>
                            <li>The Form should not refresh the page when submitted</li>
                            <li>The Deliver Button should remove the order from the page and set the order object's Delivered property to true</li>
                        </ul>
                    </li>
                    <li>The Sidebar should have 1 button to output all order details to the console <input type="checkbox"/> 
                        <ul>
                            <li><span>User Story: </span>Upon clicking the button, the user should see order details in the following format in the Browser Console:</li>
                            <li>Total Orders: 10, Total Burgers: 12, Total Drinks: 14</li>
                            <li>Total Delivered: 8</li>
                            <li>Total Undelivered: 2</li>
