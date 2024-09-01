# how to build a sudoku solver using backtracking in javascript
sudoku is logic based , combinatorial and number placement game. building a sudoku solver can be a fun and challenging at the same time ,especially when using backtracking which is a common technique to solve sudoku. in this article we will walk through the process of creating sudoku solver using js.
## what is backtracking 
as the term suggests ,backtracking refers to removing the present solution to a problem if is it unsuitable , going back(bracktracking) and use different approach.

backtracking uses a concept of recursion to look for every possible solution.

lets assume you want to travel from one place to another place, and there are sevaral routes available. in this scenario to find the path destination path you can use backtracking approach, first you start from one route and whenever you got a point where you can't proceed (a dead-end) then you have to go back to a previous point where you made a decision and choose a different route. this process is repeated untill you reach destination,thats the backtracking
## understanding the sudoku puzzle rule
before dive into coding, let's understand the rules of sudoku 
- each row must contain the number 1-9 without repetition
- each column must also contain the number 1-9 without repetition
- each subgrids 3x3 must contain the number 1-9 without repetition

## how to code sudoku rule for valid number placement 
<Code>
   const rowValidation = (board)=>{
      const myMap = new Map();
      let isRowValid=true;
      let targetRow = undefined;
      for(let row =0;row < board.length;row++){
            for(let col=0; col < board.length;col++){
               myMap.set(board[row][col],(myMap.get(board[row][col])||0)+1);
            }
            for(let [key,value] of myMap){
               if(key !== "." && value>1){
                  isRowValid=false;
                  targetRow = row;
                  return [targetRow,isRowValid];
               }
            }
            myMap.clear();
      }
      return [targetRow,isRowValid];   // row-undefined
   }
</Code>

