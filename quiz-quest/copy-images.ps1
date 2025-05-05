# Create images directory if it doesn't exist
New-Item -ItemType Directory -Force -Path "public/images"

# Copy background image
Copy-Item "../Background Images/2.jpeg" -Destination "public/images/background.jpeg"

# Copy scientist images
Copy-Item "../Front Images/ilbert istin.png" -Destination "public/images/ilbert-istin.png"
Copy-Item "../Front Images/Ibn Sina.png" -Destination "public/images/ibn-sina.png"
Copy-Item "../Front Images/Isaac Newton.png" -Destination "public/images/isaac-newton.png" 