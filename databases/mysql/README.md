#### MySQL
* When using MAMP in dev, access MySQL from the command line with `/Applications/MAMP/Library/bin/mysql --host=localhost -uroot -proot`
* About indexes
  * Basically an index is a map of all your keys that is sorted in order. With a list in order, then instead of checking every key, it can use a binary search algorithm, like this:
    1. Go to middle of list - is higher or lower than what I'm looking for?
    2. If higher, go to halfway point between middle and bottom, if lower, middle and top
    3. Is higher or lower? Jump to middle point again, etc.
    4. Using that logic, you can find an element in a sorted list much fewer steps, instead of checking every item.
  * Set the index to UNIQUE if there shouldn't be more than one instance of the same key.
  * Index those columns that are used heavily to SELECT on. Don't index columns that aren't used often in SELECT, because there's a slight performance impact on insert.
  * Don't forget to add foreign key constraints between related tables.
