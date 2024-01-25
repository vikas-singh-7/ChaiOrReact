## What is Prop drilling ?


## <h3>simply when we ewant to pass a data from a parent to its child and than from its child to that child's child than another child we need to perform prop drilling. </h3>

## <h1>but why Props Drilling ?</h1>

## <h3>because react has a data flow which says that okay react will pass data from pasrent to child component thats the flow no nested child can get the data direct from parent component so we need to pass data from parent to child and then to its child and then to its nested child this is not an efficent operation as awe are passing data to that componets which do not required that data but they get that daat just to pass the data to childs </h3>

## <h3>so what should we do ? </h3> <br> when we want that okay any component can get the data from direct parent so that no child drilling AKA passing of data will not occurs we needs to learn <b>CONTEXT API</b>

## <h2>what is CONTEXT API </h2> <br> context api is the process that gives our component freedom to have access to data from anywhere no prop drilling is required here as we make a global object and every child or nested childs or even their nested childs can get data direct from that global simply we use CONTEXT API to avoid <b>passing of data from parent to child then to its child etc </b>;