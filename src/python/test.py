import requests
from bs4 import BeautifulSoup as bs
import pandas as pd

# wiki_html = wikipediaapi.Wikipedia(
#     language='en',
#     extract_format=wikipediaapi.ExtractFormat.HTML
# )

# wiki_wiki = wikipediaapi.Wikipedia(
#     language='en',
#     extract_format=wikipediaapi.ExtractFormat.WIKI
# )

# hispanic_page = wiki_wiki.page('List of Hispanic astronauts')
# aa_page = wiki_wiki.page('Python (programming language)')

# Check if page exists
# if aa_page.exists():
#     print("Page exists.")
# else:
#     print("Page does not exist.")
#     quit()

# Print page's summary
# print(page_py.summary)

# Print page's URL
# print(page_py.fullurl)

# Print page's full text
# print(aa_page.text)

# Recursively print page sections


# def print_sections(sections, level=0):
#     for s in sections:
#         print("%s: %s - %s" % ("*" * (level + 1), s.title, s.text[0:40]))
#         print_sections(s.sections, level + 1)


# print_sections(aa_page.sections)

# get all american astronauts -> list of names -> get wiki details -> output to json

S = requests.Session()

URL = "https://en.wikipedia.org/w/api.php"

PARAMS = {
    "action": "parse",
    "page": "List of Hispanic astronauts",
    "format": "json"
}

# R = S.get(url=URL, params=PARAMS)
# DATA = R.json()

# soup = bs(DATA["parse"]["text"]["*"], 'lxml')


# table_data = [[cell.text for cell in row("td")]
#               for row in soup("tr")]
# dict = dict(zip(soup.find('th'), table_data[1],
#             table_data[2], table_data[3], table_data[4], table_data[5], table_data[6]))
# print(soup.find('th'))

names = []

hispanic_df = pd.read_html(
    "https://en.wikipedia.org/wiki/List_of_Hispanic_astronauts")
aa_df = pd.read_html(
    "https://en.wikipedia.org/wiki/List_of_African-American_astronauts")

hispanic_dfs = pd.concat([hispanic_df[1], hispanic_df[2]])
aa_dfs = pd.concat([aa_df[0], aa_df[1]])

for i, row in hispanic_dfs.iterrows():
    if 'United States' in row['Country']:
        names.append(row['NameBirth date'])

for i, row in aa_dfs.iterrows():
    names.append(row['NameBirth date'])

print(names)
