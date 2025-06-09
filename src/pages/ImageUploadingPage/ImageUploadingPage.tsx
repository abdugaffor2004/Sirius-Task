import {
  IconArrowRight,
  IconDownload,
  IconInfoCircle,
  IconReload,
} from '@tabler/icons-react';
import { useState, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import type { AppDispatch, RootState } from '../../redux/store';
import {
  setImagesData,
  uploadImagesDataAsync,
} from '../../redux/slices/imagesSlice';
import { nprogress } from '@mantine/nprogress';
import {
  ActionIcon,
  BackgroundImage,
  Box,
  Button,
  Flex,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import classes from './ImageUploadingPage.module.css';

const UPLOAD_FILES_COUNT = 3;

export const ImageUploadingPage: FC = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState<File[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const { imagePaths } = useSelector((state: RootState) => state.images);

  const handleImagesSubmit = () => {
    dispatch(uploadImagesDataAsync(files));
    nprogress.set(25);
    navigate('/questionnare');
  };

  return (
    <div>
      <Stack gap="1rem">
        <Title fz="2rem" fw={700}>
          Загрузите фотографии рисунков
        </Title>
        <Box className={classes.infoBlock}>
          <Group gap="0.5rem">
            <IconInfoCircle size={16} color="var(--color-danger-dark)" />
            <Text c="danger.1" fw={500} fz={14}>
              Допустимые форматы файлов: jpg, jpeg, png, pdf. Размер не более 5
              Мб
            </Text>
          </Group>
        </Box>
      </Stack>

      <Flex gap="4rem" mt="4rem">
        <Stack className={classes.dropzoneContainer} align="center">
          <Dropzone
            multiple={false}
            classNames={{
              root: classes.dropzone,
              inner: classes.dropzoneInner,
            }}
            accept={IMAGE_MIME_TYPE}
            onDrop={(files) => {
              const fileObjectUrl = URL.createObjectURL(files[0]);
              setFiles((prev) => [...prev, ...files]);
              dispatch(
                setImagesData({ ...imagePaths, firstPath: fileObjectUrl })
              );
            }}
          >
            <BackgroundImage
              className={classes.dropzoneInner}
              src={imagePaths.firstPath ?? ''}
            >
              <ActionIcon
                bg="primary.0"
                className={classes.uploadIcon}
                variant="light"
              >
                {imagePaths.firstPath ? (
                  <IconReload color="black" />
                ) : (
                  <IconDownload color="black" />
                )}
              </ActionIcon>
            </BackgroundImage>
          </Dropzone>
          <Text className={classes.dropzoneLabel}>Дом, дерево, человек</Text>
        </Stack>

        <Stack className={classes.dropzoneContainer} w="100%" align="center">
          <Dropzone
            multiple={false}
            classNames={{
              root: classes.dropzone,
              inner: classes.dropzoneInner,
            }}
            accept={IMAGE_MIME_TYPE}
            onDrop={(files) => {
              const thirdObjectUrl = URL.createObjectURL(files[0]);
              setFiles((prev) => [...prev, ...files]);
              dispatch(
                setImagesData({ ...imagePaths, secondPath: thirdObjectUrl })
              );
            }}
          >
            <BackgroundImage
              className={classes.dropzoneInner}
              src={imagePaths.secondPath ?? ''}
            >
              <ActionIcon
                bg="primary.0"
                className={classes.uploadIcon}
                variant="light"
              >
                {imagePaths.secondPath ? (
                  <IconReload color="black" />
                ) : (
                  <IconDownload color="black" />
                )}
              </ActionIcon>
            </BackgroundImage>
          </Dropzone>
          <Text className={classes.dropzoneLabel}>Несуществующее животное</Text>
        </Stack>

        <Stack className={classes.dropzoneContainer} w="100%" align="center">
          <Dropzone
            multiple={false}
            classNames={{
              root: classes.dropzone,
              inner: classes.dropzoneInner,
            }}
            accept={IMAGE_MIME_TYPE}
            onDrop={(files) => {
              const secondObjectUrl = URL.createObjectURL(files[0]);
              setFiles((prev) => [...prev, ...files]);
              dispatch(
                setImagesData({ ...imagePaths, thirdPath: secondObjectUrl })
              );
            }}
          >
            <BackgroundImage
              className={classes.dropzoneInner}
              src={imagePaths.thirdPath ?? ''}
            >
              <ActionIcon
                bg="primary.0"
                className={classes.uploadIcon}
                variant="light"
              >
                {imagePaths.thirdPath ? (
                  <IconReload color="black" />
                ) : (
                  <IconDownload color="black" />
                )}
              </ActionIcon>
            </BackgroundImage>
          </Dropzone>
          <Text className={classes.dropzoneLabel}>Автопортрет</Text>
        </Stack>
      </Flex>

      <Flex
        justify="space-between"
        align="center"
        className={classes.controlsContainer}
      >
        <Text c="secondary" className={classes.stepCount}>
          Шаг 1/3
        </Text>

        <Button
          size="lg"
          py={12}
          px={32}
          radius={100}
          fz={20}
          color="primary"
          disabled={files.length !== UPLOAD_FILES_COUNT}
          rightSection={<IconArrowRight />}
          onClick={handleImagesSubmit}
        >
          Далее
        </Button>
      </Flex>
    </div>
  );
};
