There are 5 pirates, they must decide how to distribute 100 gold coins among them. The pirates have seniority levels, the senior-most is A, then B, then C, then D, and finally the junior-most is E. 

Rules of distribution are: 

    The most senior pirate proposes a distribution of coins.
    All pirates vote on whether to accept the distribution.
    The distribution is approved if at least half of the pirates agree (including the proposer)
    If the distribution is accepted, the coins are disbursed and the game ends.
    If not, the proposer is nixxed (un-alived), and the next most senior pirate makes a new proposal to begin the system again.
    In case of a tie vote, the proposer can have the casting vote

Rules every pirate follows.

    Every pirate wants to survive
    Given survival, each pirate wants to maximize the number of gold coins he receives.

What is the maximum number of coins that pirate A might get? And why?






//

The answer is 98 which is not intuitive. 
A uses the facts below to get 98. 

    Consider the situation when A, B, and C die, only D and E are left. E knows that he will not get anything (D is senior and will make a distribution of (100, 0). So E would be fine with anything greater than 0.
    Consider the situation when A and B die, C, D, and E are left. D knows that he will not get anything (C will make a distribution of (99, 0, 1)and E will vote in favor of C).
    Consider the situation when A dies. B, C, D, and E are left. To survive, B only needs to give 1 coin to D. So distribution is (99, 0, 1, 0)
    Similarly, A knows about point 3, so he just needs to give 1 coin to C and 1 coin to E to get them in favor. So distribution is (98, 0, 1, 0, 1).

https://www.geeksforgeeks.org/puzzle-20-5-pirates-and-100-gold-coins/?ref=rp