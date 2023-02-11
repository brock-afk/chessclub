def calculate_elo(winner_elo: int, loser_elo: int):
    """
    Calculate the new ELO ratings of the winner and loser after a game.

    Parameters:
    - winner_elo (int): the current ELO rating of the winner
    - loser_elo (int): the current ELO rating of the loser

    Returns:
    - tuple: the new ELO ratings of the winner and loser
    """
    MAX_RATING_CHANGE = 32

    # Calculate the expected score for each player
    winner_expected = 1 / (1 + 10 ** ((loser_elo - winner_elo) / 400))
    loser_expected = 1 / (1 + 10 ** ((winner_elo - loser_elo) / 400))

    # Calculate the new ELO ratings
    winner_new_elo = winner_elo + MAX_RATING_CHANGE * (1 - winner_expected)
    loser_new_elo = loser_elo + MAX_RATING_CHANGE * (0 - loser_expected)

    return (winner_new_elo, loser_new_elo)
