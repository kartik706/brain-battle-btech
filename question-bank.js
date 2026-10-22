const raw = `
Data Structures~Easy~Stacks~Which structure follows LIFO order?~Queue~Stack~Tree~Graph~1~A stack removes its most recently added item first.
Data Structures~Easy~Queues~Which structure follows FIFO order?~Queue~Stack~Heap~Tree~0~A queue removes the earliest inserted item first.
Data Structures~Easy~Arrays~How are array elements usually accessed?~By index~By parent pointer~By hash only~By edge~0~An array uses an index to locate an element.
Data Structures~Easy~Linked Lists~A node in a singly linked list stores a value and what else?~Two child nodes~A link to the next node~A priority~A hash table~1~The next pointer links one node to its successor.
Data Structures~Easy~Trees~What is the maximum number of children of a binary-tree node?~1~2~3~Unlimited~1~A binary tree node has at most two children.
Data Structures~Medium~Searching~Binary search requires the input to be…~Sorted~Circular~A linked list~Unique only~0~Binary search repeatedly halves a sorted search interval.
Data Structures~Medium~Graphs~Which data structure is commonly used by breadth-first search?~Stack~Queue~Heap~Hash set only~1~BFS explores the frontier in first-in, first-out order.
Data Structures~Medium~Stacks~Which traversal uses a stack naturally?~Inorder tree traversal~Level-order traversal~BFS~Counting sort~0~Inorder traversal can be implemented with an explicit stack.
Data Structures~Medium~Queues~What does a circular queue reuse?~Unused space at the start~Tree leaves~Hash buckets~The call stack~0~Wrapping indices lets a queue reuse freed positions.
Data Structures~Medium~Linked Lists~Inserting after a known node in a singly linked list takes what time?~O(1)~O(log n)~O(n log n)~O(n²)~0~Once the node is known, only a constant number of links change.
Data Structures~Hard~Balanced Trees~What is the balance factor of an AVL node?~Height(left) minus height(right)~Number of children~Subtree size modulo 2~Root depth~0~AVL balance factor is the difference between the two subtree heights.
Data Structures~Hard~Heaps~In a max-heap, which value is at the root?~Smallest~Largest~Median~Most recent~1~The max-heap property places the maximum at the root.
Data Structures~Hard~Graphs~Dijkstra’s algorithm assumes edge weights are…~Non-negative~All negative~All equal to zero~Strings~0~Dijkstra’s greedy choice is valid with non-negative edge weights.
Data Structures~Hard~Hashing~What is a hash collision?~Two keys map to the same bucket~A key is sorted~A tree becomes unbalanced~A queue is empty~0~A collision occurs when distinct keys share a hash location.
Data Structures~Hard~Complexity~What is the worst-case time of searching an unbalanced BST?~O(1)~O(log n) always~O(n)~O(n log n)~2~A skewed BST can behave like a linear list.
COA~Easy~CPU Basics~Which CPU unit performs arithmetic and logical operations?~ALU~Control unit~Cache~Program counter~0~The arithmetic logic unit performs arithmetic and Boolean operations.
COA~Easy~Memory~Which memory is volatile?~RAM~ROM~Flash ROM~Blu-ray~0~RAM typically loses its contents when power is removed.
COA~Easy~CPU Basics~What does CPU stand for?~Central Processing Unit~Computer Power Utility~Core Process User~Central Program Upload~0~CPU means Central Processing Unit.
COA~Easy~Data Representation~How many bits are in one byte?~4~8~16~32~1~One byte contains eight bits.
COA~Easy~Registers~Which is a small, fast storage location inside the CPU?~Register~Hard disk~Optical disk~Tape drive~0~Registers hold data and addresses used immediately by the processor.
COA~Medium~Instruction Cycle~Which register holds the address of the next instruction?~Program Counter~Instruction Register~Accumulator~Memory Buffer~0~The program counter tracks the next instruction address.
COA~Medium~Instruction Cycle~Which register holds the currently fetched instruction?~Instruction Register~Program Counter~Stack Pointer only~Index Register~0~The instruction register stores the instruction being decoded/executed.
COA~Medium~Cache~Cache memory mainly exploits which principle?~Locality of reference~Two’s complement~Parity~Polling~0~Programs often reuse nearby or recently accessed data.
COA~Medium~Number Representation~What is 2’s complement of 00000101 in 8 bits?~11111010~11111011~00000110~10000101~1~Invert the bits and add one to get 11111011.
COA~Medium~Addressing~In immediate addressing, where is the operand?~Inside the instruction~Always on disk~In an I/O cable~In a cache tag only~0~Immediate instructions encode the operand value within the instruction.
COA~Hard~Pipelining~A data hazard occurs when…~An instruction depends on an unfinished result~Two CPUs share a clock~A cache is empty~A disk is full~0~Pipeline instructions may need a result that an earlier instruction has not produced.
COA~Hard~Pipelining~A branch can cause which pipeline hazard?~Control hazard~Only a data hazard~No hazard~Storage hazard~0~The branch outcome can change which instruction should be fetched next.
COA~Hard~Cache~If cache hit time is 2 ns, miss rate 5%, and miss penalty 40 ns, what is AMAT?~2 ns~4 ns~42 ns~40 ns~1~AMAT = hit time + miss rate × miss penalty = 2 + 0.05×40 = 4 ns.
COA~Hard~Number Representation~In 8-bit signed 2’s complement, what is the range?~-128 to 127~0 to 255~-127 to 128~-255 to 255~0~An n-bit signed 2’s-complement value ranges from -2^(n-1) to 2^(n-1)-1.
COA~Hard~I/O~What does an interrupt let a device do?~Request CPU attention~Increase RAM size~Change the instruction set~Clear the cache automatically~0~An interrupt signals the processor that a device needs service.
DSTL~Easy~Propositions~A proposition is a statement that is…~True or false~Always a question~Always both true and false~A number only~0~A proposition has a definite truth value.
DSTL~Easy~Logic~What is true AND true?~True~False~Undefined~A set~0~Conjunction is true when both operands are true.
DSTL~Easy~Sets~What is the union of {1,2} and {2,3}?~{1,2,3}~{2}~{1,3}~{}~0~The union contains every element present in either set.
DSTL~Easy~Logic~When is implication p → q false?~p true and q false~p false and q true~Both false~Both true~0~Implication is false only for a true antecedent and false consequent.
DSTL~Easy~Sets~What is the cardinality of the empty set?~0~1~2~Infinite~0~The empty set has no elements.
DSTL~Medium~Logic~Which is equivalent to NOT (p AND q)?~NOT p OR NOT q~NOT p AND NOT q~p OR q~p AND NOT q~0~De Morgan’s law changes AND to OR while negating both terms.
DSTL~Medium~Relations~A relation R is reflexive if…~Every element relates to itself~Every pair is related~It is symmetric only~It has no ordered pairs~0~Reflexivity requires (a,a) to belong to R for every element a.
DSTL~Medium~Functions~A function is injective when…~Different inputs have different outputs~Every output has two inputs~It is onto only~Its domain is empty~0~Injectivity means f(a)=f(b) implies a=b.
DSTL~Medium~Counting~How many permutations of 4 distinct objects are there?~4~8~16~24~3~The number is 4! = 24.
DSTL~Medium~Logic~The converse of p → q is…~q → p~NOT p → NOT q~NOT q → NOT p~p AND q~0~The converse swaps the antecedent and consequent.
DSTL~Hard~Logic~The contrapositive of p → q is…~NOT q → NOT p~q → p~NOT p → NOT q~p OR q~0~A conditional is logically equivalent to its contrapositive.
DSTL~Hard~Combinatorics~How many ways can 2 people be chosen from 5?~10~7~20~25~0~The combination is C(5,2)=5×4/(2×1)=10.
DSTL~Hard~Relations~A relation that is reflexive, symmetric, and transitive is called…~Equivalence relation~Partial function~Strict order~Injection~0~Those three properties define an equivalence relation.
DSTL~Hard~Recurrence~For a_n=2a_(n-1), a_0=3, what is a_3?~12~18~24~48~2~The terms are 3, 6, 12, 24.
DSTL~Hard~Graphs~A simple graph with n vertices has at most how many edges?~n(n-1)/2~n²~2n~n-1~0~Every unordered pair of distinct vertices can form one edge.
Cyber Security~Easy~Security Principles~What does the C in the CIA triad stand for?~Confidentiality~Connection~Control~Cryptography~0~The CIA triad is confidentiality, integrity, and availability.
Cyber Security~Easy~Threats~A fake email asking for your password is commonly…~Phishing~Defragmentation~Compression~Load balancing~0~Phishing tricks users into revealing information or opening malicious content.
Cyber Security~Easy~Malware~Which malware can attach itself to a file and spread when run?~Virus~Firewall~Patch~Certificate~0~A virus spreads by attaching to files or programs.
Cyber Security~Easy~Passwords~Which is the strongest password choice?~A long unique passphrase~Your first name~12345678~Your birth date~0~Long, unique passwords are harder to guess and should not be reused.
Cyber Security~Easy~Network Security~What is a firewall used for?~Filter network traffic~Store backups only~Create passwords~Compile programs~0~A firewall applies rules to allow or block network traffic.
Cyber Security~Medium~Cryptography~Encryption primarily protects data confidentiality by…~Converting plaintext into ciphertext~Deleting every copy~Compressing it~Adding a checksum only~0~Encryption makes readable data unintelligible without the required key.
Cyber Security~Medium~Hashing~A cryptographic hash is designed to be…~One-way~Easily reversible~A shared secret~A file system~0~A secure hash is not intended to be reversed to recover the input.
Cyber Security~Medium~Access Control~What does the principle of least privilege mean?~Give only permissions needed for the task~Give everyone admin access~Disable authentication~Share one password~0~Users and processes should receive only the access they require.
Cyber Security~Medium~Web Security~HTTPS protects web traffic using…~TLS encryption~A plain-text URL~A firewall rule only~A password hash in the URL~0~HTTPS uses TLS to protect data in transit and authenticate the server.
Cyber Security~Medium~Authentication~Multi-factor authentication requires…~Two or more different factor types~Two usernames~Two browsers~A longer email address~0~MFA combines different factors such as knowledge and possession.
Cyber Security~Hard~Cryptography~What is a digital signature mainly used to verify?~Authenticity and integrity~Data compression~Network speed~File size~0~A valid signature helps verify who signed data and that it was not changed.
Cyber Security~Hard~Network Security~What does a replay attack do?~Resends captured valid messages~Deletes a firewall~Changes a screen resolution~Encrypts a hard drive~0~An attacker reuses captured communication to impersonate or repeat an action.
Cyber Security~Hard~Web Security~What does SQL injection exploit?~Unsafe handling of database input~A weak Wi-Fi signal~A CPU cache miss~A screen lock~0~Untrusted input can alter a dynamically constructed SQL query.
Cyber Security~Hard~Incident Response~What is the first priority when responding to a compromised host?~Contain the threat while preserving evidence~Delete all logs immediately~Post passwords publicly~Ignore the alert~0~Containment limits damage; preserve evidence for investigation.
Cyber Security~Hard~Public Key Crypto~In public-key encryption, which key should a sender use to encrypt for a recipient?~Recipient’s public key~Sender’s private key~Recipient’s private key~A database password~0~The recipient’s private key is used to decrypt data encrypted with their public key.
Digital Electronics~Easy~Number Systems~What is binary 1010 in decimal?~8~10~12~14~1~1010₂ equals 8+2 = 10.
Digital Electronics~Easy~Logic Gates~An AND gate outputs 1 when…~Both inputs are 1~Either input is 1~Both inputs are 0~Inputs differ~0~AND is true only when both inputs are true.
Digital Electronics~Easy~Logic Gates~What does a NOT gate do?~Inverts its input~Adds two inputs~Stores a bit~Selects a channel~0~A NOT gate outputs the complement of its input.
Digital Electronics~Easy~Flip-Flops~A flip-flop stores…~One bit~One byte~A decimal digit only~An instruction~0~A basic flip-flop is a one-bit storage element.
Digital Electronics~Easy~Logic Gates~Which gate outputs 1 only when inputs differ?~XOR~AND~NOR~XNOR~0~XOR is 1 when the input values are different.
Digital Electronics~Medium~Logic Gates~By De Morgan’s law, NOT(A OR B) equals…~NOT A AND NOT B~NOT A OR NOT B~A AND B~A OR NOT B~0~De Morgan’s law changes OR to AND while complementing each input.
Digital Electronics~Medium~Combinational Circuits~A 2-to-1 multiplexer selects…~One of two data inputs~Two clock edges~A memory address only~One of four outputs~0~A select input chooses which of the two data inputs reaches the output.
Digital Electronics~Medium~Flip-Flops~In a D flip-flop, the next state at the active clock edge is…~The D input~The inverse clock~Always zero~The previous output plus one~0~At the triggering edge, Q takes the value present on D.
Digital Electronics~Medium~Adders~A full adder has how many input bits?~1~2~3~4~2~It accepts A, B, and carry-in: three one-bit inputs.
Digital Electronics~Medium~Counters~A 3-bit binary counter has how many possible states?~3~6~8~16~2~Three bits represent 2³ = 8 states.
Digital Electronics~Hard~Boolean Algebra~Simplify A + A'B.~A~A+B~A'B~AB~1~Using absorption, A + A'B simplifies to A+B.
Digital Electronics~Hard~Flip-Flops~For a JK flip-flop, what happens when J=K=1 at the active edge?~Output toggles~Output resets~Output sets~Output is unchanged~0~When both J and K are high, the JK flip-flop toggles its state.
Digital Electronics~Hard~Adders~A ripple-carry adder is slow mainly because…~Carry propagates through stages~It uses no gates~It has no inputs~It stores decimal values~0~Each stage may wait for the previous stage’s carry to arrive.
Digital Electronics~Hard~Number Systems~In 4-bit unsigned arithmetic, what is 1111₂ + 0001₂ if overflow is discarded?~0000 with carry 1~1111~10000~0001~0~The sum is 10000₂; the four-bit result is 0000 with carry-out 1.
Digital Electronics~Hard~Universal Gates~Why is NAND called a universal gate?~Any Boolean function can be built from NAND gates~It stores unlimited data~It needs no power~It converts analog signals directly~0~NAND alone can implement NOT, AND, OR, and thus any Boolean function.
`.trim();
const subjects=new Set(['Data Structures','COA','DSTL','Cyber Security','Digital Electronics']);
window.SEED_QUESTIONS=raw.split('\n').map((line,i)=>{const f=line.split('~');if(f.length!==10)throw new Error('Bad seed question row '+(i+1));const [subject,difficulty,topic,text,a,b,c,d,answer,explanation]=f;return {subject,difficulty,topic,text,options:[a,b,c,d],answer:Number(answer),explanation,active:true};});

