from bs4 import BeautifulSoup
import random

choices = {
    'j': './fist.png',
    'k': './hand-paper.png',
    'l': './scissors.png'
}

player2_input = input("Enter choice for Player 2 (j/k/l): ").lower()

if player2_input not in choices:
    print("Invalid input.")
    exit()

player1_choice = random.choice(list(choices.keys()))
player2_choice = player2_input

with open("index.html", "r", encoding="utf-8") as file:
    soup = BeautifulSoup(file, 'html.parser')

player1_img = soup.select_one('#Player1 img')
player2_img = soup.select_one('#Player2 img')

player1_img['src'] = choices[player1_choice]
player2_img['src'] = choices[player2_choice]

with open("index.html", "w", encoding="utf-8") as file:
    file.write(str(soup))

print(f"Player 1: {player1_choice.upper()}, Player 2: {player2_choice.upper()}")
