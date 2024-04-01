# Read input file
fin = open("./build/index.html", "rt")

# Read file contents to string
data = fin.read()

# Replace all occurrences of the required string
data = data.replace('http://localhost:8888/eel.js', '/eel.js')

# Close the input file
fin.close()

# Open the input file in write mode
fin = open("./build/index.html", "wt")

# Overrite the input file with the resulting data
fin.write(data)

# Close the file
fin.close()