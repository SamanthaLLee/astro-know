import pandas as pd

months = ['January', 'February', 'March', 'April', 'Apr.', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December']


def remove_birth(text):
    if '†' in text:
        text = text[0:text.index('†')]
    for month in months:
        if month in text:
            text = text[0:text.index(month)]
            return text
    return text


names = 'const names = ['

hispanic_df = pd.read_html(
    "https://en.wikipedia.org/wiki/List_of_Hispanic_astronauts")
aa_df = pd.read_html(
    "https://en.wikipedia.org/wiki/List_of_African-American_astronauts")

hispanic_dfs = pd.concat([hispanic_df[1], hispanic_df[2]])
aa_dfs = pd.concat([aa_df[0], aa_df[1]])

for i, row in hispanic_dfs.iterrows():
    if 'United States' in row['Country']:
        names += '"' + remove_birth(row['NameBirth date']) + '",'

for i, row in aa_dfs.iterrows():
    names += '"' + remove_birth(row['NameBirth date']) + '",'

names = names[:-1] + ']'

with open('src/js/names.js', 'w') as f:
    f.write(names)
