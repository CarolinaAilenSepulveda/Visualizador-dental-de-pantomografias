;<VStack>
  <Slider
    aria-label="slider-ex-2" //Primer subidor, superior
    colorScheme="pink"
    defaultValue={2.5}
    max={4}
    min={1}
    step={0.00001}
    onChange={(num) => actualizarRadioSup(num)}
  >
    <SliderTrack>
      <SliderFilledTrack />
    </SliderTrack>
    <SliderThumb />
  </Slider>

  <Slider
    aria-label="slider-ex-2" //Segundo subidor, inferior
    colorScheme="blue"
    defaultValue={2.5}
    max={4}
    min={1}
    step={0.00001}
    onChange={(num) => actualizarRadioInf(num)}
  >
    <SliderTrack>
      <SliderFilledTrack />
    </SliderTrack>
    <SliderThumb />
  </Slider>

  <Box as="span" fontSize="lg" fontWeight="bold">
    Sepia
  </Box>
  <Slider
    aria-label="slider-ex-2" //Subidor sepia
    colorScheme="green"
    defaultValue={0}
    max={100}
    min={0}
    step={0.00001}
    onChange={(n) => actualizarSepia(n)}
  >
    <SliderTrack>
      <SliderFilledTrack />
    </SliderTrack>
    <SliderThumb />
  </Slider>

  <Box as="span" fontSize="lg" fontWeight="bold">
    Escala grises
  </Box>
  <Slider
    aria-label="slider-ex-2" //Subidor byn
    colorScheme="green"
    defaultValue={0}
    max={100}
    min={0}
    step={0.00001}
    onChange={(n) => actualizarbyn(n)}
  >
    <SliderTrack>
      <SliderFilledTrack />
    </SliderTrack>
    <SliderThumb />
  </Slider>

  <Box as="span" fontSize="lg" fontWeight="bold">
    Inversión
  </Box>
  <Slider
    aria-label="slider-ex-2" //Subidor inversión
    colorScheme="green"
    defaultValue={0}
    max={100}
    min={0}
    step={0.00001}
    onChange={(n) => actualizarinversion(n)}
  >
    <SliderTrack>
      <SliderFilledTrack />
    </SliderTrack>
    <SliderThumb />
  </Slider>

  <Box as="span" fontSize="lg" fontWeight="bold">
    Hue-rotate
  </Box>
  <Slider
    aria-label="slider-ex-2" //Subidor hue
    colorScheme="green"
    defaultValue={0}
    max={360}
    min={0}
    step={0.00001}
    onChange={(n) => actualizarhue(n)}
  >
    <SliderTrack>
      <SliderFilledTrack />
    </SliderTrack>
    <SliderThumb />
  </Slider>

  <Center bg="hotpink" color="white" h="60px" w="80px">
    <Box as="span" fontSize="lg" fontWeight="bold">
      Radio superior
    </Box>
  </Center>

  <Center bg="blue" color="white" h="60px" w="80px">
    <Box as="span" fontSize="lg" fontWeight="bold">
      Radio inferior
    </Box>
  </Center>

  <IconButton
    aria-label="Search database"
    icon={<ArrowBackIcon />}
    onClick={() => {
      changePage("Menu")
    }}
  />

  <Button
    bottom={40}
    colorScheme="teal"
    position="absolute"
    right={10}
    size="lg"
    variant="outline"
    onClick={() => {
      changePage("Procesada")
    }}
  >
    Procesar
  </Button>
</VStack>
