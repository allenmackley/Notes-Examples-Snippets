### Editors listed by my least favorite to favorite.

#### Eclipse
* Ugly, but powerful.
* Has IDE features for testing.
* Has support for lots of languages, but seems to be aimed toward Java.
* Context menus that let you specify certain starting points and scaffolding.

#### NetBeans
* A lot like Eclipse.
* One feature I noticed (that probably Eclipse can do too) is to easily click on a method name to go to the file where it's written.

#### Sublime Text
* Was my favorite editor for a long time.
* Beautiful, simple design.
* Powerful plugin manager.
* Lots of customization options.

#### Atom
* As good as Sublime Text, but fully open source.
* Better UI for installing and managing plugins.
* I use a terminal plugin for it that makes it really convenient to use with the terminal.
* I like how files that have changed in source control show up as blue or green in the sidebar.

#### Visual Studio Code
* Feels a lot like Sublime Text and Atom.
* Really nice UI.
* They seem to have done some smart things by default. I like the GIT controls on the bottom. I like the built in terminal, debugger, and minimap. These are things that are available as add-ons with Atom, but that aren't set by default.

#### My favorite plugins for Visual Studio Code
* Twilight Theme
* Vim
* Auto-Open Markdown Preview

#### My custom keybindings for Visual Studio Code. 
The first four are really convient for moving around the file left, right, up, or down, without needing to move my hand away from the center row of the keyboard.

The second four are for tabbing through itellisense auto-suggestions; for the same reason, so that I don't have to move my hands away from the center row over to the arrow keys.

```
[
{ 
    "key": "cmd+[",                  
    "command": "cursorUp",
    "when": "editorTextFocus" 
},
{ 
    "key": "cmd+]",                  
    "command": "cursorDown",
    "when": "editorTextFocus" 
},
{ 
    "key": "cmd+,",                  
    "command": "cursorLeft",
    "when": "editorTextFocus" 
},
{ 
    "key": "cmd+.",                  
    "command": "cursorRight",
    "when": "editorTextFocus" 
},
{ 
    "key": "cmd+.",                  
    "command": "cursorRight",
    "when": "editorTextFocus" 
},
{
    "key": "tab",
    "command": "selectNextQuickFix",
    "when": "editorFocus && quickFixWidgetVisible"
},
{
    "key": "shift+tab",
    "command": "selectPrevQuickFix",
    "when": "editorFocus && quickFixWidgetVisible"
},
{
    "key": "tab",
    "command": "selectNextSuggestion",
    "when": "editorTextFocus && suggestWidgetMultipleSuggestions && suggestWidgetVisible"
},
{
    "key": "shift+tab",
    "command": "selectPrevSuggestion",
    "when": "editorTextFocus && suggestWidgetMultipleSuggestions && suggestWidgetVisible"
}
]
```


