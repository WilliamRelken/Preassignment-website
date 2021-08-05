const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(<!DOCTYPE html>
    <html>
    <head>
    <title>Wills Circle Animation</title>

    <style>
        /*<!-- Place any CSS code here -->*/
    </style>
</head>
    <body>
    <h2>Circle Animation Generator</h2>

    <!-- CAUTION - Avoid changing the values and style of the HTML tags below - CAUTION -->
    <div style="width: 1000px; float: left;">
        <!-- The canvas is where the animation happens -->
        <canvas id="container" height=600 width=1000 style="border: 1px solid;"></canvas>
    </div>
    <!-- This div holds the interface for the user to control the animation -->
    <div style="width: 325px; height: 590px; margin-left: 1020px; padding: 10px 0px 0px 10px; border: 1px solid;">
        <!-- This div is for the Add a Circle radio button -->
        <div style="width: 100px; float: left;">
            <!-- Add a radio button to display the Add a Circle controls -->

            <label for="add">
                <input type="radio" id="add" name="circleRad" onclick="updateForm(this)" checked> Add a Circle
            </label>

        </div>
        <!-- This div is for the Update a Circle radio button -->
        <div style="width: 120px; margin-left: 110px;">
            <!-- Add a radio button to display the Update a Circle controls -->

            <label for="upCircle">
                <input type="radio" id="upCircle" name="circleRad" onclick="updateForm(this)"> Update a Circle
            </label>

        </div>
        <!-- This div is for the Add a Circle controls -->
        <div id="add_circle" style="display: block; height: 175px;">
            <!-- Add the Add a Circle controls here -->

            <table>

                <tr>
                    <td>
                        <label for="Name">Name: </label>
                    </td>
                    <td>
                        <input type="text" id="name">
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="Radius">Radius: </label>
                    </td>
                    <td>
                        <input type="number" id="radius" min="10" max="50">

                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="Speed">Speed: </label>
                    </td>
                    <td>
                        <input type="number" id="speed" min="0" max="25">

                    </td>
                </tr>
            </table>
            <input type="button" onclick="addCircle()" value="Add Circle">

        </div>
        <!-- This div is for the Update a Circle controls -->
        <div id="update_circle" style="display: none;  height: 175px;">
            <!-- Add the Update a Circle controls here -->

            <table>
                <tr>
                    <select name="Circles" id="circle_list" onchange="updateSelection()"></select>
                </tr>
                <tr>
                    <td>
                        <label for="Name">Name: </label>
                    </td>
                    <td>
                        <input type="text" id="upname">
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="Radius">Radius: </label>
                    </td>
                    <td>
                        <input type="number" id="upradius" min="10" max="50">

                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="Speed">Speed: </label>
                    </td>
                    <td>
                        <input type="number" id="upspeed" min="0" max="25">

                    </td>
                </tr>
            </table>



            <input type="button" onclick="updateCircle()" value="Update Circle">

        </div>
        <!-- This div is for the Stop All Circles button -->
        <div style="text-align: center;">
            <!-- Add the Stop All Circles button here -->
            <input type="button" onclick="stopAnimation()" value="Stop Circles">
        </div>
    </div>

    <div>
        <ul>
            <li><a class="grow" href="../index.html">ePortfolio</a></li>
        </ul>
    </div>

    <script>
        /*<!-- The Circle class allows you to add multiple circles to the canvas -->*/
        class Circle {
        color = 0; /*<!-- The current color based on the circle's direction -->*/
        movingDown = true; /*<!-- Is circle moving towards the bottom of canvas -->*/
        movingRight = true; /*<!-- Is circle moving towards the right of canvas -->*/
        name = ""; /*<!-- The name assigned to the circle -->*/
        radius = 0; /*<!-- The radius assigned to the circle -->*/
        speed = 0; /*<!-- The speed assigned to the circle -->*/
        xPos = 0; /*<!-- The current horizontal position of the circle -->*/
        yPos = 0; /*<!-- The current vertical position of the circle -->*/

        /*<!-- Create an instance of the Circle class -->*/
        constructor(name, radius, speed) {
        this.name = name;
        this.radius = radius;
        this.speed = speed;

        this.xPos = Math.floor(Math.random() * (MAX_WIDTH - radius * 2));
        this.yPos = Math.floor(Math.random() * (MAX_HEIGHT - radius * 2));
    }

        /*<!-- Getters and setters -->*/
        get name() {return this.name; }

        get radius() {return this.radius; }

        get speed() {return this.speed; }

        set name(name) { this.name = name; }

        set radius(radius) {this.radius = radius; }

        set speed(speed) {this.speed = speed; }

        /*<!-- Determine if the circle's direction needs to change -->*/
        /*<!-- This should prevent the circle from traveling beyond the canvas borders -->*/
        checkForWallCollision() {
        if(this.movingRight && this.xPos >= (MAX_WIDTH - this.radius * 2)){
        this.movingRight = false;
    }
        if(!this.movingRight && this.xPos <= 0){
        this.movingRight = true;
    }

        if(this.movingDown && this.yPos >= (MAX_HEIGHT - this.radius * 2)){
        this.movingDown = false;
    }
        if(!this.movingDown && this.yPos <= 0){
        this.movingDown = true;
    }

        this.updateColor();

    }

        /*<!-- Draw the circle at its current position on the canvas -->*/
        draw(canvas) {
        this.checkForWallCollision();
        this.updatePosition();

        canvas.beginPath();
        canvas.arc(this.xPos + this.radius, this.yPos + this.radius, this.radius, 0, 2 * Math.PI);

        canvas.fillStyle = this.updateColor();
        canvas.fill();

        canvas.fillStyle = "white";
        canvas.font = "bold 14pt Calibri";
        canvas.fillText(this.name, this.xPos + this.radius, this.yPos + this.radius + 5);

    }

        /*<!-- Choose the circle's color based on its direction of travel -->*/
        updateColor() {
        if(this.movingDown){
        if(this.movingRight){
        return COLORS[0];
    }
        else{
        return COLORS[1];
    }
    }
        else{
        if(this.movingRight){
        return COLORS[2];
    }
        else{
        return COLORS[3];
    }
    }

    }

        /*<!-- Update the circle's position based on its direction and speed -->*/
        updatePosition() {
        if(this.movingRight){
        this.xPos += this.speed;
    }
        else{
        this.xPos -= this.speed;
    }

        if(this.movingDown){
        this.yPos += this.speed;
    }
        else{
        this.yPos -= this.speed;
    }
    }
    }

        const CIRCLES = []; /*<!-- Array to hold the circles added to the canvas -->*/
        const COLORS = ["red", "green", "blue", "orange"];
        const MAX_WIDTH = 1000; /*<!-- Width of the canvas defined in the HTML above -->*/
        const MAX_HEIGHT = 600; /*<!-- Height of the canvas defined in the HTML above -->*/
        /*<!-- Creates timer to automate the animation -->*/
        /*<!-- The timer repeats every 10 milliseconds -->*/
        const TIMER = setInterval(updateCanvas, 10, document.getElementById("container").getContext("2d"));

        updateAddCircleForm(); /*<!-- Prefills data in the Add a Circle fields -->*/

        /*<!-- Creates a new circle and adds it to the CIRCLES array -->*/
        function addCircle() {
        let name = document.getElementById('name').value;
        let radius = parseInt(document.getElementById('radius').value);
        let speed = parseInt(document.getElementById('speed').value);

        let circle = new Circle(name, radius, speed);

        CIRCLES.push(circle);
        updateSelectList();
        updateAddCircleForm();
    }

        /*<!-- Turns the timer off to stop the animation -->*/
        function stopAnimation() {
        clearInterval(TIMER);
    }

        /*<!-- Prefills data in the Add a Circle fields -->*/
        function updateAddCircleForm() {
        let name = document.getElementById('name');
        let radius = document.getElementById('radius');
        let speed = document.getElementById('speed');

        name.value = CIRCLES.length + 1;
        radius.value = 25;
        speed.value = 5;
    }

        /*<!-- Updates the selected circle with the data in the Update a Circle fields -->*/
        function updateCircle() {
        let selectRef = document.getElementById('circle_list');
        let selected = selectRef.selectedIndex;

        let name = document.getElementById('upname');
        let radius = parseInt(document.getElementById('upradius').value);
        let speed = parseInt(document.getElementById('upspeed').value);

        CIRCLES[selected].name = name.value;
        CIRCLES[selected].radius = radius;
        CIRCLES[selected].speed = speed;

        updateSelectList();
    }

        /*<!-- Draws the next frame of animation on the canvas -->*/
        function updateCanvas(canvas) {
        canvas.clearRect(0, 0, MAX_WIDTH, MAX_HEIGHT);

        for(let circle in CIRCLES){
        CIRCLES[circle].draw(canvas);
    }
    }

        /*<!-- Display the fields of the the selected form: Add a Circle or Update a Circle -->	*/
        function updateForm(control) {
        let addCircle = document.getElementById("add_circle");
        let updateCircle = document.getElementById("update_circle");
        let addOption = document.getElementById("add");



        if(control == addOption){
        addCircle.style.display = 'block';
        updateCircle.style.display = 'none';

    }
        else{
        updateCircle.style.display = 'block';
        addCircle.style.display = 'none';
        updateSelection();

    }
        return;
    }

        /*<!-- Display the data in the Update a Circle fields when a circle is selected -->	*/
        function updateSelection() {
        let selectRef = document.getElementById('circle_list');
        let index = selectRef.selectedIndex;

        let name = document.getElementById('upname');
        let radius = document.getElementById('upradius');
        let speed = document.getElementById('upspeed');

        if(index != -1){
        name.value = CIRCLES[index].name;
        radius.value = CIRCLES[index].radius;
        speed.value = CIRCLES[index].speed;

        console.log(CIRCLES[index].name)

    }

        return;
    }

        /*<!-- Update the Update a Circle drop-down list when a circle is added -->*/
        function updateSelectList() {
        let select = document.getElementById('circle_list');

        while (select.options.length) select.remove(0);

        for(let circle in CIRCLES){
        select.options[select.options.length] = new Option(CIRCLES[circle].name, circle);
    }
    }
    </script>
</body>
</html>);
});

//if heroku doesnt specify port then set to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);