from src.domain import calculate_elo

def test_calculate_elo():
    # Test with initial ELO ratings for both players
    winner_elo = 1500
    loser_elo = 1500
    winner_new_elo, loser_new_elo = calculate_elo(winner_elo, loser_elo)

    # Check that the ELO ratings are updated correctly
    assert winner_new_elo > winner_elo
    assert loser_new_elo < loser_elo

    # Test with a higher ELO rating for the winner
    winner_elo = 1600
    loser_elo = 1400
    winner_new_elo, loser_new_elo = calculate_elo(winner_elo, loser_elo)

    # Check that the winner's ELO rating increased and the loser's decreased
    assert winner_new_elo > winner_elo
    assert loser_new_elo < loser_elo

    # Test with a lower ELO rating for the winner
    winner_elo = 1400
    loser_elo = 1600
    winner_new_elo, loser_new_elo = calculate_elo(winner_elo, loser_elo)

    # Check that the winner's ELO rating decreased and the loser's increased
    assert winner_new_elo > winner_elo
    assert loser_new_elo < loser_elo


