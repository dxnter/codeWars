describe('Given examples', () => {
  let friends;

  it('Example test one of each', () => {
    friends = [
      {
        username: 'David',
        status: 'online',
        lastActivity: 10,
      },
      {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22,
      },
      {
        username: 'Bob',
        status: 'online',
        lastActivity: 104,
      },
    ];
    Test.assertDeepEquals(
      whosOnline(friends),
      {
        online: ['David'],
        offline: ['Lucy'],
        away: ['Bob'],
      },
      'Wrong result for example one of each'
    );
  });

  it('Example test no one online', () => {
    friends = [
      {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22,
      },
      {
        username: 'Bob',
        status: 'online',
        lastActivity: 104,
      },
    ];

    expect(
      whosOnline(friends),
      {
        offline: ['Lucy'],
        away: ['Bob'],
      },
      'Wrong result for example no one online'
    );
  });
});
