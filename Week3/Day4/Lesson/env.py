# 1. adjust path to the location
# PS C:\Users\alexa\OneDrive\Documents\WebDev\DI\DI-Bootcamp> cd .\Week3\
# PS C:\Users\alexa\OneDrive\Documents\WebDev\DI\DI-Bootcamp\Week3> cd .\Day4\
# PS C:\Users\alexa\OneDrive\Documents\WebDev\DI\DI-Bootcamp\Week3\Day4> py -m pip install virtualenv
# Collecting virtualenv
#   Using cached virtualenv-20.26.3-py3-none-any.whl.metadata (4.5 kB)
# Collecting distlib<1,>=0.3.7 (from virtualenv)
#   Using cached distlib-0.3.8-py2.py3-none-any.whl.metadata (5.1 kB)
# Collecting filelock<4,>=3.12.2 (from virtualenv)
#   Using cached filelock-3.15.4-py3-none-any.whl.metadata (2.9 kB)
# Collecting platformdirs<5,>=3.9.1 (from virtualenv)
#   Using cached platformdirs-4.2.2-py3-none-any.whl.metadata (11 kB)
# Using cached virtualenv-20.26.3-py3-none-any.whl (5.7 MB)
# Using cached distlib-0.3.8-py2.py3-none-any.whl (468 kB)
# Using cached filelock-3.15.4-py3-none-any.whl (16 kB)
# Using cached platformdirs-4.2.2-py3-none-any.whl (18 kB)
# Installing collected packages: distlib, platformdirs, filelock, virtualenv
# Successfully installed distlib-0.3.8 filelock-3.15.4 platformdirs-4.2.2 virtualenv-20.26.3

# [notice] A new release of pip is available: 24.1 -> 24.2
# [notice] To update, run: python.exe -m pip install --upgrade pip
# PS C:\Users\alexa\OneDrive\Documents\WebDev\DI\DI-Bootcamp\Week3\Day4> Virtual environment

# !Activation
# PS C:\Users\alexa\OneDrive\Documents\WebDev\DI\DI-Bootcamp> cd .\Week3\
# PS C:\Users\alexa\OneDrive\Documents\WebDev\DI\DI-Bootcamp\Week3> cd .\Day4\
# PS C:\Users\alexa\OneDrive\Documents\WebDev\DI\DI-Bootcamp\Week3\Day4> py -m venv my_env
# PS C:\Users\alexa\OneDrive\Documents\WebDev\DI\DI-Bootcamp\Week3\Day4> my_env/Scripts/activate
# (my_env) PS C:\Users\alexa\OneDrive\Documents\WebDev\DI\DI-Bootcamp\Week3\Day4> 

# !Deactivation
# (my_env) PS C:\Users\alexa\OneDrive\Documents\WebDev\DI\DI-Bootcamp\Week3\Day4> deactivate
# PS C:\Users\alexa\OneDrive\Documents\WebDev\DI\DI-Bootcamp\Week3\Day4> 

# !Databases in Python
# PS C:\Users\alexa\OneDrive\Documents\WebDev\DI\DI-Bootcamp\Week3\Day4> my_env/Scripts/activate
# (my_env) PS C:\Users\alexa\OneDrive\Documents\WebDev\DI\DI-Bootcamp\Week3\Day4> pip list
# Package Version
# ------- -------
# pip     24.2
# (my_env) PS C:\Users\alexa\OneDrive\Documents\WebDev\DI\DI-Bootcamp\Week3\Day4> py -m pip install psycopg2
# Collecting psycopg2
#   Using cached psycopg2-2.9.9-cp312-cp312-win_amd64.whl.metadata (4.5 kB)
# Using cached psycopg2-2.9.9-cp312-cp312-win_amd64.whl (1.2 MB)
# Installing collected packages: psycopg2
# Successfully installed psycopg2-2.9.9
# (my_env) PS C:\Users\alexa\OneDrive\Documents\WebDev\DI\DI-Bootcamp\Week3\Day4> 

# Checking packages installatin
# (my_env) PS C:\Users\alexa\OneDrive\Documents\WebDev\DI\DI-Bootcamp\Week3\Day4> pip list
# Package  Version
# -------- -------
# pip      24.2
# psycopg2 2.9.9
# (my_env) PS C:\Users\alexa\OneDrive\Documents\WebDev\DI\DI-Bootcamp\Week3\Day4> 

# ! make sure to install all modules required using pip install within env - it will not have access to installed modules from outside! 

# (my_env) PS C:\Users\alexa\OneDrive\Documents\WebDev\DI\DI-Bootcamp\Week3\Day4> pip install python-dotenv
# Collecting python-dotenv
#   Downloading python_dotenv-1.0.1-py3-none-any.whl.metadata (23 kB)
# Downloading python_dotenv-1.0.1-py3-none-any.whl (19 kB)
# Installing collected packages: python-dotenv
# Successfully installed python-dotenv-1.0.1
# (my_env) PS C:\Users\alexa\OneDrive\Documents\WebDev\DI\DI-Bootcamp\Week3\Day4> 

# !Listed modules in project
# (my_env) PS C:\Users\alexa\OneDrive\Documents\WebDev\DI\DI-Bootcamp\Week3\Day4> pip freeze > requirements.txt 
# (my_env) PS C:\Users\alexa\OneDrive\Documents\WebDev\DI\DI-Bootcamp\Week3\Day4> 

# !Use os module so project can be properly adjusted by the checker (read in the internet more about it)