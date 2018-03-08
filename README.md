# PickABook

A website where users can exchange books for credit.

This project was built in short sprints, iterating on out MVP. The [first version](https://github.com/alextwilson/pick_a_book) of this has the interaction:

```
As a user
so I can see all books
I want be able to see books on the index page
```

Our second sprint focussed on adding react to our existing framework. After some experimentation it proved challenging to do this with our existing web framework so we split into three pairs to drive solution spikes. Eventually we found that using Phoenix as an API that the React app called was very productive, though it did require rewriting our Phoenix framework to return JSON instead of web pages. Once we had the ability to write to our database we were able to continue our progress with the project but now using React.
