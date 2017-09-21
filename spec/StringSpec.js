describe('Reversing a String', () => {
  it('returns the same string if only 1 character', () => {
    expect(reverse('a')).toEqual('a');
  })

  it('returns the reversed string if 2 characters', () => {
    expect(reverse('ab')).toEqual('ba');
  })
})
