import {
  Button,
  Card,
  Flex,
  Group,
  Radio,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import type { FC } from 'react';
import { ThumbUpIcon } from '../../custom-icons/ThumbUpIcon';
import { FlagIcon } from '../../custom-icons/FlagIcon';
import { variantsList } from '../../constants';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

export const QuestionnareFormPage: FC = () => {
  return (
    <div>
      <Title fz="2rem" fw={700}>
        Общая информация о ребенке
      </Title>

      <Stack mt={48}>
        <TextInput radius={6} label="Имя ребенка" />
        <Flex gap="4rem">
          <DateInput
            radius={6}
            label="Дата рождения ребенка"
            placeholder="28.07.1986"
            valueFormat="DD.MM.YYYY"
          />

          <Radio.Group name="child-gender" label="Пол ребенка">
            <Group gap="2rem">
              <Radio value="Мужской" label="Мужской" />
              <Radio value="Женский" label="Женский" />
            </Group>
          </Radio.Group>
        </Flex>
        <TextInput radius={6} label="Имя родителя, заполняющего анкету" />
      </Stack>

      <Card bg="danger.0" p="1.5rem" radius="0.5rem" mt="4rem">
        <Flex gap="1rem">
          <div>
            <ThumbUpIcon />
          </div>

          <Text>
            Пожалуйста, внимательно прочитайте каждый вопрос и выберите наиболее
            подходящий вариант ответа, отражающий поведение и эмоциональное
            состояние вашего ребенка в течение последних 2-4 недель. Отвечайте
            максимально честно и искренне, так как от этого зависит точность
            оценки психоэмоционального развития Вашего ребенка.
          </Text>
        </Flex>

        <Flex gap="1rem" mt="1rem">
          <div>
            <FlagIcon />
          </div>

          <Text>Все вопросы обязательны к заполнению</Text>
        </Flex>
      </Card>

      <Stack gap="4rem" mt="4rem">
        <Stack mt="1.5rem" gap="2.5rem">
          <Title fz="1.4rem" fw={700}>
            Раздел 1. Эмоциональная сфера
          </Title>
          <Radio.Group
            name="child-emotions-1"
            label="Ребенок часто выражает радость и удовольствие:"
          >
            <Group gap="2rem">
              {variantsList.map((variant) => (
                <Radio value={variant} label={variant} />
              ))}
            </Group>
          </Radio.Group>

          <Radio.Group
            name="child-emotions-2"
            label="Ребенок часто выражает радость и удовольствие:"
          >
            <Group gap="2rem">
              {variantsList.map((variant) => (
                <Radio value={variant} label={variant} />
              ))}
            </Group>
          </Radio.Group>

          <Radio.Group
            name="child-emotions-3"
            label="Ребенок часто выражает радость и удовольствие:"
          >
            <Group gap="2rem">
              {variantsList.map((variant) => (
                <Radio value={variant} label={variant} />
              ))}
            </Group>
          </Radio.Group>

          <Radio.Group
            name="child-emotions-4"
            label="Ребенок часто выражает радость и удовольствие:"
          >
            <Group gap="2rem">
              {variantsList.map((variant) => (
                <Radio value={variant} label={variant} />
              ))}
            </Group>
          </Radio.Group>
        </Stack>

        <Stack gap="2.5rem">
          <Title fz="1.4rem" fw={700}>
            Раздел 2. Социальное взаимодействие
          </Title>
          <Radio.Group
            name="child-socialisation-1"
            label="Ребенок легко заводит друзей:"
          >
            <Group gap="2rem">
              {variantsList.map((variant) => (
                <Radio value={variant} label={variant} />
              ))}
            </Group>
          </Radio.Group>

          <Radio.Group
            name="child-socialisation-2"
            label="Ребенок легко заводит друзей:"
          >
            <Group gap="2rem">
              {variantsList.map((variant) => (
                <Radio value={variant} label={variant} />
              ))}
            </Group>
          </Radio.Group>

          <Radio.Group
            name="child-socialisation-3"
            label="Ребенок предпочитает играть один, а не с другими детьми:"
          >
            <Group gap="2rem">
              {variantsList.map((variant) => (
                <Radio value={variant} label={variant} />
              ))}
            </Group>
          </Radio.Group>

          <Radio.Group
            name="child-socialisation-4"
            label="Ребенок предпочитает играть один, а не с другими детьми:"
          >
            <Group gap="2rem">
              {variantsList.map((variant) => (
                <Radio value={variant} label={variant} />
              ))}
            </Group>
          </Radio.Group>
        </Stack>

        <Stack gap="2.5rem">
          <Title fz="1.4rem" fw={700}>
            Раздел 3. Саморегуляция и поведение
          </Title>
          <Radio.Group
            name="child-behaviour-1"
            label="Ребенок умеет следовать правилам и инструкциям:"
          >
            <Group gap="2rem">
              {variantsList.map((variant) => (
                <Radio value={variant} label={variant} />
              ))}
            </Group>
          </Radio.Group>

          <Radio.Group
            name="child-behaviour-2"
            label="Ребенок умеет следовать правилам и инструкциям:"
          >
            <Group gap="2rem">
              {variantsList.map((variant) => (
                <Radio value={variant} label={variant} />
              ))}
            </Group>
          </Radio.Group>

          <Radio.Group
            name="child-behaviour-3"
            label="Ребеноку трудно контроллировать свои импульсы:"
          >
            <Group gap="2rem">
              {variantsList.map((variant) => (
                <Radio value={variant} label={variant} />
              ))}
            </Group>
          </Radio.Group>

          <Radio.Group
            name="child-behaviour-4"
            label="Ребеноку трудно контроллировать свои импульсы:"
          >
            <Group gap="2rem">
              {variantsList.map((variant) => (
                <Radio value={variant} label={variant} />
              ))}
            </Group>
          </Radio.Group>
        </Stack>

        <Stack gap="2.5rem">
          <Title fz="1.4rem" fw={700}>
            Раздел 4. Самооценка и уверенность в себе
          </Title>
          <Radio.Group
            name="child-confidance-1"
            label="Ребенок уверен в своих силах и способностях:"
          >
            <Group gap="2rem">
              {variantsList.map((variant) => (
                <Radio value={variant} label={variant} />
              ))}
            </Group>
          </Radio.Group>

          <Radio.Group
            name="child-confidance-2"
            label="Ребенок уверен в своих силах и способностях:"
          >
            <Group gap="2rem">
              {variantsList.map((variant) => (
                <Radio value={variant} label={variant} />
              ))}
            </Group>
          </Radio.Group>

          <Radio.Group
            name="child-confidance-3"
            label="Ребенок часто сомневается в себе:"
          >
            <Group gap="2rem">
              {variantsList.map((variant) => (
                <Radio value={variant} label={variant} />
              ))}
            </Group>
          </Radio.Group>

          <Radio.Group
            name="child-confidance-4"
            label="Ребенок часто сомневается в себе:"
          >
            <Group gap="2rem">
              {variantsList.map((variant) => (
                <Radio value={variant} label={variant} />
              ))}
            </Group>
          </Radio.Group>
        </Stack>

        <Stack gap="2.5rem">
          <Title fz="1.4rem" fw={700}>
            Раздел 5. Общие вопросы
          </Title>
          <Radio.Group
            name="child-common-emotionality"
            label="Как вы оцениваете общее эмоциональное состояние вашего ребенка ?"
          >
            <Group gap="2rem">
              {variantsList.map((variant) => (
                <Radio value={variant} label={variant} />
              ))}
            </Group>
          </Radio.Group>

          <Textarea
            rows={5}
            label="Есть ли у Вашего ребенка какие-либо особенности развития или поведения, о которых Вы хотели бы сообщить дополнительно?"
          />
          <Textarea
            rows={5}
            label="Какие, на Ваш взгляд, сильные стороны и таланты есть у Вашего ребенка?"
          />
          <Textarea
            rows={5}
            label="Какие, на Ваш взгляд, области требуют особого внимания и развития у Вашего ребенка?"
          />
          <Textarea
            rows={5}
            label="Обращались ли Вы ранее к специалистам (психологу, неврологу, логопеду) по поводу развития или поведения Вашего ребенка?"
          />
        </Stack>
      </Stack>

      <Flex justify="space-between" align="center" mt="4rem" mb="2rem">
        <Text c="secondary" fz="1rem">
          Шаг 2/3
        </Text>

        <Group>
          <Button
            bg="primary.0"
            c="font-main"
            size="lg"
            py={12}
            px={44}
            radius={100}
            fz={16}
            variant="light"
            leftSection={<IconChevronLeft />}
          >
            К загрузке рисунков
          </Button>

          <Button
            size="lg"
            py={12}
            px={44}
            radius={100}
            fz={16}
            rightSection={
              <Group gap={0}>
                <IconChevronRight style={{ marginRight: '-14px' }} />
                <IconChevronRight />
              </Group>
            }
          >
            Узнать результаты
          </Button>
        </Group>
      </Flex>
    </div>
  );
};
