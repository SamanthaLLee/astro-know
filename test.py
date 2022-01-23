import wikipediaapi
import requests

wiki_wiki = wikipediaapi.Wikipedia('en')


title = 'Python_(programming_language)'
page_py = wiki_wiki.page(title)

# Check if page exists
if page_py.exists():
    print("Page exists.")
else:
    print("Page does not exist.")
    quit()

# Print page's summary
# print(page_py.summary)

# Print page's URL
# print(page_py.fullurl)

# Print page's full text
# print(page_py.text)

# Recursively print page sections
def print_sections(sections, level=0):
    for s in sections:
        print("%s: %s - %s" % ("*" * (level + 1), s.title, s.text[0:40]))
        print_sections(s.sections, level + 1)
# print_sections(page_py.sections)

# get all american astronauts -> list of names -> get wiki details -> output to json
response = requests.get("https://ll.thespacedevs.com/2.2.0/astronaut/?nationality=American")
print(response.json())