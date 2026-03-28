import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 16,
  },
  petIcon: {
    fontSize: 80,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  petName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
  },
  favoriteButton: {
    marginTop: 20,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ff6b6b',
  },
  favoriteButtonActive: {
    backgroundColor: '#ff6b6b',
  },
  favoriteButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff6b6b',
  },
  favoriteButtonTextActive: {
    color: '#fff',
  },
  backButton: {
    marginTop: 20,
    backgroundColor: '#333',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
