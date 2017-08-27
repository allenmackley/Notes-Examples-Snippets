#### Notes on references and pointers in C++

Compile and run examples with `g++ filename.cpp -o main; ./main`

* references and pointers are very similar. I like to think of a pointer like a "bucket" that can hold an address. The bucket can be dumped out and refilled.
* A reference, however, cannot be re-assigned. So it's like a bucket, that once filled, has a lid put on it. The bucket is the same size, regardless; both a pointer and a reference take up the same amount of memory.
* If you try to re-assign a pointer, the original variable will be left alone, and you'll simply put a new address in it that points to another variable. However, if you try to re-assign a reference, it will re-assign the original variable that the reference points to.
* References cannot be stuffed into an array, whereas pointers can be.
* You can have pointers to pointers to pointers offering extra levels of indirection. Whereas references only offer one level of indirection.
* The \* symbol "dereferences" a pointer, that is, accesses the value at the memory location it points to vs simply accessing the address within it. It's like saying *"send me through to the value".*

```sh
#include <cstdio>
using namespace std
int main(int argc, char \*argv[]) {
  int x = 7;
  int \*ip = \&x;
  int &y = x;
  printf("The value of x is %d\n", x);
  printf("The value of \*ip is %d\n", \*ip);
  printf("The value of y is %d\n", y);

  y = 42;
  printf("The value of x is %d\n", x);
  printf("The value of \*ip is %d\n", \*ip);
  printf("The value of y is %d\n", y);
  return 0;
}
```

* Pointers can iterate over an array, you can use `++` to go to the next item that a pointer is pointing to, and `+ 4` to go to the 5th element. This is no matter what size the object is that the pointer points to.
* `argv` stands for *argument vector* and `argc` for *argument count*.
* The `int argc, char *argv[]` part of `main()` is used for taking in input from the terminal (if we happen to be building a terminal app, otherwise we can safely leave it out). If we wrote `./test a b c` for example, there would be 4 arguments in `argv[]`: `argv[0]` is always the name of the file, `argv[1]`, `argv[2]`, etc., are the options that were provided.

```sh
#include <iostream>

int main(int argc, char** argv) {
  std::cout << "Have " << argc << " arguments:" << std::endl;
  for (int i = 0; i < argc; ++i) {
      std::cout << argv[i] << std::endl;
  }
}
```

  Running it with `./test a b c` will output

  Have 4 arguments:
  ./test
  a1
  b2
  c3

* char \*\*argv and char \*argv[] are essentially the same things. argv[] is simply a different way of writing \*argv, and is a pointer to an array (not an actual array). However there is an additional \* that adds an additional pointer. So char \*\* argv is saying *"point to the first char in the pointer array of chars".*
  * There is an array.
  * There is a pointer, `*argv`, that points to it.
  * There is a character pointer that points to the first value of the array pointer, or a "pointer to a pointer".
  * We can iterate over the character pointer to move through the values pointed to in the array pointer.
