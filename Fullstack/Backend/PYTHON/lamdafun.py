hel=lambda a,b:print('bcv') 
hel
# format_numeric = lambda num: f"{num:e}" if isinstance(num, int) else f"{num:,.2f}"

# print("Int formatting:", format_numeric(1000000))
# print("float formatting:", format_numeric(999999.789541235))
is_even_list = [lambda arg=x: arg * 10 for x in range(1, 5)]

# iterate on each lambda function
# and invoke the function to get the calculated value
for item in is_even_list:
	print(item())
