# Hints til opgaver
This took us around 45mins for people introduced to all these security issues before. The time for the hints can vary and must be "felt" in the room when running the game.

## Part One SQL Injection / Broken Access Control / Security Misconfiguration
- (5 min in) " '; show tables; -- " to see the tables.
- (7 min in) " '; describe users; -- " to display the structure of the users tabel. (view the enum "roles")
- (9-10 min in) Update user role query hint.
- (12-14 min in) Supply the query.

## Part Two Command Injection
- When a url is searched, it is "discretely" shown, that is is executet in bash terminal.(if an error is provoked, linux users could spot that it is a terminal from a mile away, but we cannot expect people to be super linux familiar)
- (17 min in) Multiple bash command execution with " && "
- (19-20 min in) " && ls" command 
- Feel the room if the hints did not lead them in the right direction, explain that they have to find a file that contains further info.
- (24-25 min in ) remind of "cat" function in linux

## Part Three Insecure Deserialization / Code Injection / Using components with known vulnerabilities
- There is to begin with at text hint hidden in white text (dev tools will get you this one fast)
- After 15 sec, there pops a cookie image up on users screen.
- When cookie image, is hovered, there is displayed an url for base64decode.org
- (30 min in) Display the terminal with the running server, so as they can see that the commands actually execute, on the server.
- (35 min in) Hint that there is a way to terminate a process in javascript (process.exit(0))
- Wait for winner :-D

## Part Four demonstration of Command Injection through deserialized backdoor, created via code injection.
- Set up the server from part 3
- Copy/paste the "Backdoor base64"
- Post it to the server via changing the recieved cookie value with the backdoor code
- Now open a machine with netcat (macOS / linux)
- Then run the following commands
- $nc <url_for_part3> 3333 (the port supplied, if you changed the port in part3 you should use that)
- $GET /?backdoor=welcome HTTP/1.1
- press Return/Enter once
- now try executing $whoami (this should return the name of your user that runs the server instance)
- execute commands on server :D