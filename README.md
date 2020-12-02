## Review 4

#### Background
- company that makes maths papers easier to read
- scanning and looking for sums
- extracts sums as strings and evaluates those strings
- it outputs the original sum string with an evaluated result
- string calculator

#### Inputs/outputs
- "1 * 1" => ["1 * 1", 1]

#### Testing
- "1 * 1" => ["1 * 1", 1]
- +, /, -

#### Edge cases
- empty string throw math error MathError "Input must be a valid mathematical string separated by spaces"

#### Prelim design
- input string -> split by spaces -> given to another function as arguments input 1 = first number, input 2 = second number and input 3 is the mathetical 'operator'
 => output is original string and result.   

#### languages
- Javscript
- jasmine
