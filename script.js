function printList(movie) {
    "use strict";
    var temp = ""; 
    for (var i = 0; i < movie.length; ++i) {
        if (typeof movie[i] !== 'undefined') 
            temp += "\'" + movie[i] + "\'";
        else   
            temp += movie[i];
        if (i < movie.length - 1)
            temp += "\n";
    }
    return temp;
}

function main(){
    "use strict";
    
    //Step 1
    var favoriteMoviesList = [
        'A Silent Voice',
        'The Lion King',
        'Batman: The Dark Knight',
        'Your Name',
        'Pirates of the Caribbean'
    ];
    window.console.log("1) The second movie in the favoriteMoviesList array is " + favoriteMoviesList[1] + ".");
    

    //Step 2
    var movies = new Array(5);
    for(var i = 0; i < movies.length; ++i) {
        movies[i] = favoriteMoviesList[i];
    }
    
    window.console.log("2) The first movie in the movies array is " + movies[0] + "." );


    //Step 3
    var movies = new Array(5);
    for(var i = 0; i < movies.length; ++i) {
        movies[i] = favoriteMoviesList[i];
    }
    
    movies.splice(2, 0, "Kung Fu Panda")
    window.console.log("3) After Adding " + movies[2] + ", the length of array movies is: " + movies.length);


    //Step 4
    movies = [];
    for(var i = 0; i < favoriteMoviesList.length; ++i) {
        movies[i] = favoriteMoviesList[i];
    }
    window.console.log("4) " + movies[0] + " was removed from the movies array.");
    delete movies[0];
    window.console.log("Currently, the movies array contains the following: \n" + printList(movies));


    //Step 5
    movies = [];
    movies[0] = 'A Silent Voice';
    movies[1] = 'The Lion King';
    movies[2] = 'Batman: The Dark Knight';
    movies[3] = 'Your Name';
    movies[4] = 'Pirates of the Caribbean';
    movies[5] = 'Kung Fu Panda';
    movies[6] = 'Monty Python: The Holy Grail';

    window.console.log("5) The movies array contains the following movies: ");

    var temp = "";
    for(var index in movies) {
        temp += movies[index] + "\n";
    }
    window.console.log(temp);


    //Step 6
    movies = [];
    movies[0] = 'A Silent Voice';
    movies[1] = 'The Lion King';
    movies[2] = 'Batman: The Dark Knight';
    movies[3] = 'Your Name';
    movies[4] = 'Pirates of the Caribbean';
    movies[5] = 'Kung Fu Panda';
    movies[6] = 'Monty Python: The Holy Grail';

    window.console.log("6) The movies array contains the following movies: ");

    var temp6 = "";
    for(var index of movies) {
        temp6 += index + "\n";
    }
    window.console.log(temp6);


    //Step 7
    movies = [];
    movies[0] = 'A Silent Voice';
    movies[1] = 'The Lion King';
    movies[2] = 'Batman: The Dark Knight';
    movies[3] = 'Your Name';
    movies[4] = 'Pirates of the Caribbean';
    movies[5] = 'Kung Fu Panda';
    movies[6] = 'Monty Python: The Holy Grail';
    movies.sort();

    window.console.log("7) The movies array contains the following movies: ");

    var temp = "";
    for(var index of movies) {
        temp += index + "\n";
    }
    window.console.log(temp);


    //Step 8
    movies = [];
    movies[0] = 'A Silent Voice';
    movies[1] = 'The Lion King';
    movies[2] = 'Batman: The Dark Knight';
    movies[3] = 'Your Name';
    movies[4] = 'Pirates of the Caribbean';
    movies[5] = 'Kung Fu Panda';
    movies[6] = 'Monty Python: The Holy Grail';

    var leastFavMovies = [];
    leastFavMovies[0] = 'The Boy in the Striped Pajamas'
    leastFavMovies[1] = 'The Last Airbender'
    leastFavMovies[2] = 'Star Wars: The Rise of Skywalker'


    window.console.log("8)");



    var temp8 = "Movies I like:\n\n";
    for(var index in movies) {
        temp8 += movies[index] + "\n";
    }
    window.console.log(temp8);

    var temp8_2 = '\nMovies I regret watching:\n\n';
    for(var index in leastFavMovies) {
        temp8_2 += leastFavMovies[index] + "\n";
    }
    window.console.log(temp8_2);


    //Step 9
    movies = [];
    movies[0] = 'A Silent Voice';
    movies[1] = 'The Lion King';
    movies[2] = 'Batman: The Dark Knight';
    movies[3] = 'Your Name';
    movies[4] = 'Pirates of the Caribbean';
    movies[5] = 'Kung Fu Panda';
    movies[6] = 'Monty Python: The Holy Grail';

    var leastFavMovies = [];
    leastFavMovies[0] = 'The Boy in the Striped Pajamas'
    leastFavMovies[1] = 'The Last Airbender'
    leastFavMovies[2] = 'Star Wars: The Rise of Skywalker'

    movies = movies.concat(leastFavMovies);
    movies.sort();
    movies.reverse();

    window.console.log("9) " + printList(movies));


    //Step 10
    movies = [];
    movies[0] = 'A Silent Voice';
    movies[1] = 'The Lion King';
    movies[2] = 'Batman: The Dark Knight';
    movies[3] = 'Your Name';
    movies[4] = 'Pirates of the Caribbean';
    movies[5] = 'Kung Fu Panda';
    movies[6] = 'Monty Python: The Holy Grail';

    var leastFavMovies = [];
    leastFavMovies[0] = 'The Boy in the Striped Pajamas'
    leastFavMovies[1] = 'The Last Airbender'
    leastFavMovies[2] = 'Star Wars: The Rise of Skywalker'

    movies = movies.concat(leastFavMovies);
    movies.sort();
    movies.reverse();

    window.console.log("10) Removed the last item from the movies array: " + movies.pop() + ".");

    //Step 11
    movies = [];
    movies[0] = 'A Silent Voice';
    movies[1] = 'The Lion King';
    movies[2] = 'Batman: The Dark Knight';
    movies[3] = 'Your Name';
    movies[4] = 'Pirates of the Caribbean';
    movies[5] = 'Kung Fu Panda';
    movies[6] = 'Monty Python: The Holy Grail';

    var leastFavMovies = [];
    leastFavMovies[0] = 'The Boy in the Striped Pajamas'
    leastFavMovies[1] = 'The Last Airbender'
    leastFavMovies[2] = 'Star Wars: The Rise of Skywalker'

    movies = movies.concat(leastFavMovies);
    movies.sort();
    movies.reverse();

    window.console.log("11) The first item in the array is : " + movies.shift() + ".");


    //Step 12
    var indicesBadMovies = [];

    for(var i = 0; i < movies.length; ++i) {
        for(var j = 0; j < leastFavMovies.length; ++j){
            if(movies[i] == leastFavMovies[j])
            {
                indicesBadMovies.push(i);
                j = leastFavMovies.length;
            }
        }
    }

    window.console.log("12) The current movies array is: " + printList(movies));
    window.console.log("The indices of the movies I don't like are: " + indicesBadMovies + ".");

    movies[indicesBadMovies[0]] = 'Santa Claus';
    movies[indicesBadMovies[1]] = 'Godzilla Minus One';
    movies[indicesBadMovies[2]] = 'Howls Moving Castle';

    window.console.log("The new movies array is: " + printList(movies));


    //Step 13
    var movies2D = [
        ['A Silent Voice', 1],
        ['The Lion King', 2],
        ['Batman: The Dark Knight', 3],
        ['Your Name', 4],
        ['Pirates of the Caribbean', 5]
    ];

    var movieNamesOnly = [];
    movies2D.forEach(function (movieRank) {
        "use strict";
        movieNamesOnly.push(movieRank.filter(function (obj) {
            "use strict";
            return typeof obj === "string";
        }));
    });

    window.console.log("13) My top 5 favorite movies are: \n" + printList(movieNamesOnly));


    //Step 14
    var employees = [
        "ZAK",
        "JESSICA",
        "MARK",
        "FRED",
        "SALLY"
    ];

    var showEmployee = function (employee) {
        var output = "";
        employee.forEach(function (emp) {
            output += emp + "\n";
        });
        return output;
    };

    window.console.log("14)\n");
    window.console.log("Employees:\n\n" + showEmployee(employees));


    //Step 15
    var arrayValues = [58, '', 'abcd', true, null, false, 0];
    var filterValues = arrayValues.filter(function(value){
        "use strict";
        if(value !== false && value !== null && value !== 0 && value !== ''){
        return true;
        }
        return false;
    });
    window.console.log(filterValues);
    window.console.log("15) The filtered array: " + filterValues);


    //Step 16
    var arrayValues = [8, 89, 23, 56, 48, 15, 26, 35, 14, 74, 82];
    var randomArrayValue = function(value){
        return value[Math.floor(Math.random() * value.length)];
    }

    window.console.log("16) A randomly selected number fromt he array [8, 89, 23, 56, 48, 15, 26, 35, 14, 74, 82] is: " + randomArrayValue(arrayValues));


    //Step 17
    var arrayValue = [8, 89, 23, 56, 48, 15, 26, 35, 14, 74, 82];

    var maxValue = function(value){
        return Math.max(...value);
    }

    window.console.log("17) A randomly selected number fromt he array [8, 89, 23, 56, 48, 15, 26, 35, 14, 74, 82] is: " + maxValue(arrayValues));
}
main();